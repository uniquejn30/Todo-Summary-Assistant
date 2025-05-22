// todo-summary-assistant/backend/index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// GET /todos
app.get('/todos', async (req, res) => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// POST /todos
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  const { data, error } = await supabase.from('todos').insert([{ title, completed: false }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

// DELETE /todos/:id
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('todos').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// POST /summarize
app.post('/summarize', async (req, res) => {
  const { data: todos, error } = await supabase.from('todos').select('*').eq('completed', false);
  if (error) return res.status(500).json({ error: error.message });

  const todoTitles = todos.map(t => `- ${t.title}`).join('\n');
  const prompt = `Summarize the following to-do list:\n${todoTitles}`;

  try {
    const aiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const summary = aiResponse.data.choices[0].message.content;

    await axios.post(process.env.SLACK_WEBHOOK_URL, { text: summary });

    res.json({ message: 'Summary sent to Slack successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to summarize and send to Slack.', details: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
