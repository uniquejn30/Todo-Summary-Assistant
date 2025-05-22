import { useEffect, useState } from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [message, setMessage] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:4000/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    await axios.post('http://localhost:4000/todos', { title: newTodo });
    setNewTodo('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`);
    fetchTodos();
  };

  const summarizeTodos = async () => {
    try {
      const res = await axios.post('http://localhost:4000/summarize');
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Failed to send summary to Slack');
    }
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Todo Summary Assistant</h1>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={summarizeTodos}>Summarize and Send to Slack</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
