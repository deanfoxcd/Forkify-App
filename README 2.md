# 🏝️ The Wild Oasis Admin Platform

[![React](https://img.shields.io/badge/React-2023-blue?logo=react&style=flat-square)](https://react.dev/) [![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&style=flat-square)](https://vitejs.dev/)

A modern, feature-rich internal admin platform for The Wild Oasis – a fictional luxury cabin resort. This Single Page Application (SPA) is used by staff to manage bookings, cabins, guests, and hotel operations.

---

## 🚀 Demo

👉 [Visit the Wild Oasis Website](https://the-wildest-oasis-lime.vercel.app/)

---

## 🧪 Test Credentials

You can use the following credentials to log in for testing/demo purposes:

- **Username:** `test@test.com`
- **Password:** `password123`

---

## ✨ Features

- Secure user authentication and protected routes
- Dashboard with real-time stats and analytics
- Manage bookings, check-ins, and check-outs
- Edit and view cabin inventory
- User/staff management and permissions
- Customizable hotel settings
- Responsive design (desktop & mobile)
- Dark mode toggle
- Data visualizations with charts

---

## 📸 Screenshots

> _Add screenshots here!_ > <img src="./screenshots/dashboard.png" width="600" alt="Dashboard" />

---

## 🛠️ Getting Started

To run this project locally:

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/the-wild-oasis-admin.git
   cd the-wild-oasis-admin
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env.local` file and add your Supabase credentials:
     ```env
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_KEY=your-supabase-key
     ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧰 Tech Stack

- **Frontend:** React 18, Vite
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **State/Data:** @tanstack/react-query
- **Styling:** Styled Components
- **Visualization:** Recharts
- **Deployment:** Netlify / Vercel (recommended)

---

## ⚠️ Known Issues

- There is currently a **CORS issue** with Vercel and Supabase, so cabin images may not load. This is being investigated.

---

## 📬 Contact

Created by [Dean Fox](https://github.com/deanfoxcd) – feel free to reach out!
