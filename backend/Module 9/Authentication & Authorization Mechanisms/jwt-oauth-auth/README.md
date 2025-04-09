# 🔐 JWT Authentication with Third-Party OAuth (Google OAuth Example)

This project demonstrates how to implement JWT-based authentication after successful login with a third-party OAuth provider like **Google**.

---

## ✅ Features

- OAuth login using Google
- Generate JWT token after OAuth login
- Middleware to protect routes using JWT
- Access user profile info
- Secure and scalable architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Passport.js (for OAuth)
- passport-google-oauth20
- jsonwebtoken (JWT)
- dotenv
- Middleware (custom auth middleware)

---

## 📁 Project Structure

```
jwt-oauth-auth/
├── config/
│   └── passport.js
├── middleware/
│   └── jwtAuth.js
├── routes/
│   └── authRoutes.js
├── server.js
├── .env
└── package.json
```

---

## 📦 Installation

```bash
npm init -y
npm install express passport passport-google-oauth20 jsonwebtoken dotenv cookie-session
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

---

## 🔧 Config: Passport Strategy (`config/passport.js`)

## 📂 Middleware: JWT Auth (`middleware/jwtAuth.js`)

## 📂 Routes: Authentication Routes (`routes/authRoutes.js`)

## 🚀 Server Setup (`server.js`)

---

## 🧪 Testing the App

1. Navigate to: `http://localhost:3000/auth/google`
2. Sign in with your Google account
3. Get a JWT token in the response
4. Use the token to call `/profile` with:

```http
GET /profile
Authorization: Bearer <your-token>
```

---

## 🔐 Key Concepts

- OAuth for external login
- JWT for token-based authentication
- Middleware for route protection
- Token-based sessionless architecture

---