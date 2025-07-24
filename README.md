# 🤖 AI-Powered Prompt App

A full-stack AI-enabled prompt management system that allows users to create, organize, and view prompts with semantic sections. Built using **Next.js** for the frontend, **NestJS** for the backend, and **MongoDB** for persistence. AI tools were integrated to improve usability and developer productivity.

---

## 🧠 AI Role in This Project

### ✅ Assisted in:
- Designing database schema and data flow
- Breaking down prompts into structured sections using natural language
- Generating backend DTOs, services, and controller templates
- Building frontend forms, validation logic, and UI components
- Writing technical documentation and README content

### 🛠️ Used AI for:
- Summarizing prompt content into "sections"
- Validating API request/response formats
- Improving user experience with copy and interaction feedback
- Debugging issues during development

### 💡 AI Helped With:
- Rapid prototyping
- Semantic chunking of prompts
- Organizing technical tasks and planning
- Writing scripts for video walkthrough

---

## 🗂️ Project Structure

```bash
ai-prompt-app/
├── backend/              # NestJS backend with REST APIs
│   ├── src/
│   │   ├── prompts/      # Controller, Service, DTOs
│   │   └── app.module.ts
│   └── ...
│
├── frontend/             # Next.js frontend
│   ├── pages/
│   │   ├── index.tsx     # Home Page
│   │   ├── new.tsx       # Create Prompt
│   │   └── [id].tsx      # Prompt Details
│   └── components/
│
└── README.md
```

---

## ⚙️ Requirements

- Node.js v18+
- MongoDB (local or Docker container)

### Run MongoDB via Docker:
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/ai-prompt-app.git
cd ai-prompt-app
```

### 2. Start Backend (NestJS)
```bash
cd backend
npm install
npm run start:dev
```

### 3. Start Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📌 Features

- Create prompts with a title and sections
- Sections embedded and stored in MongoDB
- Frontend: TailwindCSS, React components
- Backend: DTOs, validation, error handling

---

## 🔧 Future Improvements

- Add authentication (JWT/session)
- Prompt editing & deletion
- Section tagging & filtering
- Semantic search via vector DB
- AI-powered suggestions for prompt enhancement

---

## 📹 Loom Video (Demo Script)

> Record a 3–4 minute video showing:
> - Project structure
> - Where AI helped (highlighting code)
> - Key decisions/assumptions
> - What you'd improve with more time

---

## 📚 Tech Stack

| Tech        | Description             |
|-------------|--------------------------|
| Next.js     | Frontend Framework       |
| NestJS      | Backend REST API         |
| MongoDB     | NoSQL Document Storage   |
| TailwindCSS | Styling Framework        |
| TypeScript  | Static Typing            |

---

## 📝 License

MIT License.

---

> Built with the help of AI to accelerate learning, coding, and iteration. ✨

