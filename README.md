# 📝 Todo Summary Assistant

A productivity-focused, full-stack application that helps users manage their tasks efficiently and generate smart summaries using AI. Built with **React** frontend, **Spring Boot** or **Node.js** backend, and integrated with **LLM APIs** and **Slack** for streamlined workflows.

---

## 🚀 Features

- ✅ **Create, Update, and Delete Todos**
- 🧠 **AI-Powered Summarization** of tasks using Large Language Models (LLMs)
- 🧩 **Slack Integration** to send todo summaries directly to a Slack channel
- 🔍 **Filter & Search** through todos
- 📊 **Dashboard View** for task overview
- 🌐 **RESTful API** powered backend
- 🛡️ **Secure & Scalable Architecture**

---

## 🛠️ Tech Stack

### Frontend
- React.js (with Hooks)
- TailwindCSS / CSS Modules
- Axios

### Backend
- Node.js with Express
- REST APIs
- LLM integration via OpenAI/Gemini

### Integrations
- Slack Webhooks API
- LLM APIs (OpenAI/Gemini)

### Dev Tools
- Git & GitHub
- Postman
- VS Code

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/uniquejn30/Todo-Summary-Assistant.git
cd Todo-Summary-Assistant

### 2. Frontend Setup
cd frontend
npm install
npm start
### 3.Backend Setup
cd backend
# Open in IDE (e.g., IntelliJ or Eclipse)
# Run the main Spring Boot application class

📡 Slack Integration
a) Create an incoming webhook in your Slack workspace.
b) Add the webhook URL to your backend .env (Node.js) or application.properties (Spring Boot).
c) Trigger summaries from the app UI or via scheduled jobs.

LLM Integration
a) Configure your OpenAI/Gemini API key in environment variables.
b) Use the /summarize API endpoint to generate AI summaries of todos.

🧪 Testing
✅ Manual UI testing

✅ Backend API testing via Postman

✅ LLM response validation with test prompts

📌 Future Improvements
🔐 User authentication (OAuth or JWT)

🗃️ Task categorization & priority tags

📆 Calendar integration

📱 Mobile responsiveness

🙌 Contribution
Feel free to fork this repo and submit pull requests. Suggestions, bug reports, and improvements are welcome!

