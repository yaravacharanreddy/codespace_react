# 👥 User Management System

A full-stack User Management System built with React.js (Frontend), Node.js, Express.js (Backend), and MongoDB (Database). The application performs full **CRUD operations** using **REST APIs**.

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: RESTful API (GET, POST, PUT, DELETE)
- **Middleware**: express.json(), CORS

---

## 📁 Project Structure

```
user-management-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserForm.js
│   │   │   └── UserList.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Users.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🧱 Backend Setup

### 📦 Installation

```bash
cd backend
npm install
```

**Note**: If the above commands are not working try yourself with required one.

### 🔧 Environment Variables

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/userDB
```

**Note**: The `.env` file is just reference for you only.

### 🗂 Connect MongoDB (config/db.js)

### 🧾 User Model (models/userModel.js)

### 🎮 Controller (controllers/userController.js)

### 🔌 Routes (routes/userRoutes.js)

### 🚀 Server (server.js)

---

## 🎨 Frontend Setup

### 📦 Installation

```bash
cd frontend
npm install
```

**Note**: If the above commands are not working try yourself with required one.

### 🔗 API Base URL

Inside a `.env` file in `frontend/`:

```
REACT_APP_API=http://localhost:5000/api/users
```
**Note**: The `.env` file is just reference for you only.

### 📄 User List Component (UserList.jsx)

### ✍️ User Form Component (UserForm.jsx)

### 🧩 App Component (App.jsx)

---

## 🧪 Testing

You can test the backend API using **Postman** or test the full application through the **React frontend UI**.

---

## 🚀 Features

- Add New User
- View All Users
- Update Existing User
- Delete User
- React Hooks (`useState`, `useEffect`)
- Modular Backend API Structure

---
