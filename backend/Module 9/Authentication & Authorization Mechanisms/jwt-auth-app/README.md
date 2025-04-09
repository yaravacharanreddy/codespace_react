# 🔐 Implementing JWT-based Authentication in Node.js & Express.js

This project demonstrates how to implement secure authentication using **JSON Web Tokens (JWT)**. Users can register, log in, and access protected routes using a token-based system.

---

## ✅ Features

- User Registration & Login
- JWT Token Generation & Validation
- Protected Routes using Middleware
- Secure Password Hashing

---

## 🛠 Tech Stack

- Node.js
- Express.js
- jsonwebtoken
- bcryptjs
- dotenv
- Middleware (custom auth middleware)

---

## 📁 Project Structure

```
jwt-auth-app/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── authRoutes.js
├── users.json  # Temporary file-based user store
├── server.js
├── .env
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
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

---

## 🚀 server.js

## 📄 users.json (fake DB)

```json
[]
```

---

## 📂 controllers/authController.js

## 📂 middleware/authMiddleware.js

## 📂 routes/authRoutes.js

## 📬 API Endpoints

| Method | Route              | Description             |
|--------|--------------------|-------------------------|
| POST   | /api/auth/register | Register a new user     |
| POST   | /api/auth/login    | Login and get JWT token |
| GET    | /api/auth/protected| Access protected data   |

---

## 🔐 How It Works

- User registers and gets stored (in a file for now).
- On login, server returns a JWT token.
- Protected routes require token in the header:  
  `Authorization: Bearer <token>`

---

## 🧠 Concepts Covered

- JWT Token Authentication
- Secure Password Hashing (bcrypt)
- Middleware for Authorization
- Environment Variables for Secrets

---

