# 🔐 Authentication and API Security with Node.js, Express.js, JWT

This project demonstrates how to build a secure backend API using **Node.js**, **Express.js**, and security-focused middleware including **Helmet**, **CORS**, and **JWT (JSON Web Tokens)** for authentication.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Middleware:
  - CORS
  - Helmet
  - express.json()
- JWT (jsonwebtoken)

---

## 🔑 Environment Variables (`.env`)

```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

**Note**: The `.env` variables are just for your reference only.

---

## 🔐 Middleware Used

### 📌 Helmet
Sets secure HTTP headers.
```js
app.use(helmet());
```

### 📌 CORS
Enables cross-origin requests.
```js
app.use(cors());
```

### 📌 express.json()
Parses incoming JSON requests.
```js
app.use(express.json());
```

---

## 📄 API Routes

### **POST** `/api/auth/login`
Login using dummy credentials and receive a JWT.

### **GET** `/api/auth/profile`
Protected route; returns user data if valid JWT token is provided.

---

## 🔑 JWT Authentication Flow

1. User logs in with credentials.
2. Server verifies credentials and sends a **JWT token**.
3. Client stores the token and sends it in the **Authorization** header for protected routes.
4. Middleware checks token validity before accessing protected routes.

---

## 🔧 Auth Controller (controllers/authController.js)

## 🔐 Auth Middleware (middlewares/authMiddleware.js)

## 🛣️ Routes (routes/authRoutes.js)

## ⚙️ Server Setup (server.js)

---

## 🧪 Testing with Postman

### ✅ Login

**POST** `/api/auth/login`

**Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "your-jwt-token"
}
```

---

### 🔐 Access Profile

**GET** `/api/auth/profile`

**Headers:**
```
Authorization: Bearer your-jwt-token
```

**Response:**
```json
{
  "username": "admin",
  "message": "Profile data"
}
```

---

## 🔐 Key Security Concepts

- 🔒 Secure headers with **Helmet**
- 🔄 Controlled cross-origin requests with **CORS**
- 🔐 Token-based authentication with **JWT**
- ✅ Protecting API routes with middleware

---
