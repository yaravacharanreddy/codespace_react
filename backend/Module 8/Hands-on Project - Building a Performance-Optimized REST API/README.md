# ⚡ Optimized API with Async Programming, Streaming, and Aggregation

This project demonstrates how to build a **high-performance REST API** using asynchronous JavaScript, MongoDB Aggregation, Redis caching, and Node.js Streams to handle large data operations efficiently.

---

## ✅ What You Will Build

A high-performance API with:

- 🚀 **Asynchronous Programming** in Node.js
- 📊 **Optimized MongoDB Aggregation Queries**
- 💾 **Streaming Large Files with Node.js Streams**
- 🧠 **Caching with Redis for Performance**

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Caching**: Redis
- **Tools**: Postman, Nodemon

---

## 📁 Folder Structure

```
optimized-api/
├── config/
│   └── db.js
├── controllers/
│   ├── analyticsController.js
│   └── streamController.js
├── routes/
│   ├── analyticsRoutes.js
│   └── streamRoutes.js
├── utils/
│   └── cache.js
├── data/
│   └── large-file.txt
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 1️⃣ Set Up Project

### 📦 Install Dependencies

```bash
npm init -y
npm install express mongoose dotenv redis
npm install nodemon --save-dev
```

### 🌐 Environment Setup (.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/optimizedAPI
REDIS_URL=redis://localhost:6379
```
**NOTE**: The `.env` is just only for reference.
---

## 2️⃣ Create Express Server (`server.js`)

## 3️⃣ REST API Endpoints

---

### 📌 Streaming a Large File (`controllers/streamController.js`)

#### ➕ Route (`routes/streamRoutes.js`)

---

### 📌 Aggregation Route for Analytics (`controllers/analyticsController.js`)

#### ➕ Route (`routes/analyticsRoutes.js`)

---

### 📌 Redis Caching Utility (`utils/cache.js`)

---

## 🔄 Sample MongoDB User Model (`models/userModel.js`)

---

## 🧪 4️⃣ Run & Test the API

### ✅ Start Server

```bash
npx nodemon server.js
```

### 🧪 Test Endpoints (Using Postman)

- **GET /api/stream** – Stream large text file
- **GET /api/analytics/users** – Get aggregated user statistics (uses Redis cache)

---

## ⚙️ Features & Highlights

- Asynchronous operations with `async/await`
- Efficient file delivery using `Streams`
- Fast data reads with `Redis` caching
- Powerful analytics with MongoDB `Aggregation`
- Clean folder structure for scaling APIs

---

