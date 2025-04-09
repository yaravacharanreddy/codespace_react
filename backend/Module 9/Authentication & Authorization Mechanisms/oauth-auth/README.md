# 🔐 Authentication & Authorization using OAuth/OpenID

This project demonstrates how to implement authentication and authorization in a Node.js app using **OAuth 2.0 / OpenID Connect** with third-party providers like Google.

---

## ✅ Features

- OAuth 2.0 login with Google
- Access control based on login status
- Session handling with Passport.js
- Secure authentication using OpenID Connect

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Passport.js
- passport-google-oauth20
- express-session
- dotenv (for environment variables)

---

## 📁 Folder Structure

```
oauth-auth/
├── server.js
├── config/
│   └── passport-setup.js
├── .env
├── package.json
└── README.md
```

---

## 📦 Installation

```bash
npm init -y
npm install express passport passport-google-oauth20 express-session dotenv
```
**NOTE**: Before run these commands, you must navigate to the respective folder.

---

## ⚙️ Configuration

Create a `.env` file:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
CALLBACK_URL=http://localhost:3000/auth/google/callback
```
**NOTE**: The `.env` variable are reference for you. Make them according to you.

---

## 🔧 Passport Setup - `config/passport-setup.js`

## 🚀 Server Code - `server.js`

---

## 🔐 How It Works

1. User clicks "Login with Google"
2. Redirects to Google OAuth
3. On success, returns access token and profile
4. User session is stored
5. Authenticated users can access `/dashboard`

---

## 🧠 Concepts Covered

- OAuth 2.0 with Passport.js
- OpenID Connect for secure identity
- Express session integration
- Authorization middleware

---

## ✅ Use Cases

- Social logins (Google, GitHub, Facebook)
- Securing API endpoints based on user roles
- Managing user sessions securely

---
