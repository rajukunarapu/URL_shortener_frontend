📄 Frontend README (README.md)
markdown
Copy
Edit
# 🌐 URL Shortener Frontend

This is the **React.js frontend** for the URL Shortener project.  
It allows users to:
- ✅ Sign up & log in
- ✅ Shorten long URLs into clean short links
- ✅ View shortened URLs in a responsive table
- ✅ Check stats (click counts, created date, etc.)

---

## 🚀 Features
- ⚛ **React.js** with Hooks
- 🎨 **Material UI** for a modern, responsive UI
- 🔐 **Authentication** (Signup/Login) with JWT (stored in cookies)
- 📊 **Stats page** for every shortened URL
- 📦 **Axios** for API calls
- 🌀 **Lazy loading with Suspense** for better performance

---

## 🏗️ Tech Stack
- **React 18**
- **Material UI**
- **Axios**
- **React Router v6**
- **Vite** for bundling

---

## ⚙️ Installation & Setup
```bash
# Clone repo
git clone <frontend-repo-url>

# Go into project folder
cd url-shortener-frontend

# Install dependencies
npm install

# Run development server
npm run dev
👉 The app will run on http://localhost:5173 by default.

🔗 Environment Variables
Create a .env file in the root and add:

env
Copy
Edit
VITE_SERVER_URL=http://localhost:5000
📂 Folder Structure
bash
Copy
Edit
src/
 ├── Components/    # Reusable UI components
 ├── Layouts/       # NavBar, etc.
 ├── Pages/         # Home, Login, Signup, Stats
 ├── Services/      # Axios API calls
 ├── Context/       # Auth Context
 ├── AppRoutes.jsx  # Routing setup
 └── main.jsx
🤝 AI Acknowledgment
This project was planned & developed with AI assistance (ChatGPT).
AI was used for:

📘 Learning best practices (JWT auth, React Router, API integration)

🛠 Planning architecture & folder structure

✍️ Drafting some boilerplate code (later reviewed and customized)
