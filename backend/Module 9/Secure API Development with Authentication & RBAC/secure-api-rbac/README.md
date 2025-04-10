# 🔐 Secure API Development with JWT and Role-Based Access Control (RBAC)

This project demonstrates how to develop a secure RESTful API with:
- JWT Authentication
- Role-Based Authorization (RBAC)
- Middleware protection for sensitive routes

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- Custom Middleware for RBAC
- dotenv (for environment variables)

---

## 📁 Project Structure

```
secure-api-rbac/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
│   └── userController.js
├── middleware/
│   └── auth.js
│   └── role.js
├── models/
│   └── userModel.js
├── routes/
│   └── authRoutes.js
│   └── userRoutes.js
├── .env
├── server.js
└── package.json
```

---

## 📦 Installation

```bash
npm init -y
npm install express jsonwebtoken bcryptjs dotenv
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
JWT_SECRET=your_jwt_secret
```

---

## 🔧 User Model (`models/userModel.js`)

## 🔐 Auth Middleware (`middleware/auth.js`)

## 🎯 Role Middleware (`middleware/role.js`)

## 🔐 Auth Controller (`controllers/authController.js`)

## 👥 User Controller (`controllers/userController.js`)

## 🚏 Auth Routes (`routes/authRoutes.js`)

## 👥 User Routes (`routes/userRoutes.js`)

## 🚀 Server Setup (`server.js`)

---

## 🧪 Test the API

### 🔐 Login:
```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

Response:
```json
{
  "token": "<JWT-TOKEN>"
}
```

### 🔒 Protected Route:
```bash
GET /api/users/dashboard
Authorization: Bearer <JWT-TOKEN>
```

```bash
GET /api/users/admin
Authorization: Bearer <JWT-TOKEN>
```

---

## 🔐 Key Concepts

- JWT-based Authentication for secure sessionless login
- Role-based Authorization to restrict access
- Middleware to handle authentication and access logic

---
