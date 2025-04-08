# 📚 Book Management System - REST API with Express.js & MongoDB

A hands-on project to understand **REST API** principles and perform **CRUD operations** using **HTTP methods** with Express.js, MongoDB, middleware, and error handling.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Middleware (body-parser, custom error handler)
- REST API Principles

---

## 🔑 Environment Variables (`.env`)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookDB
```

**Note**: The `.env` variables are reference for you only.

---

## 🧱 MongoDB Model (models/bookModel.js)

## 🎮 API Routes (routes/bookRoutes.js)

## 🧠 Controller Logic (controllers/bookController.js)

## ⚙️ Middleware (middlewares/errorHandler.js)

## 🚀 Server Entry (server.js)

---

## 🧪 Testing with Postman

### 📍 Base URL: `http://localhost:5000/api/books`

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/`              | Fetch all books      |
| GET    | `/:id`           | Fetch single book    |
| POST   | `/`              | Add new book         |
| PUT    | `/:id`           | Update book details  |
| DELETE | `/:id`           | Delete book          |

---

## 📦 Sample POST Body

```json
{
  "title": "Zero to One",
  "author": "Peter Thiel",
  "publishedYear": 2014,
  "genre": "Business"
}
```

---

## 📌 Concepts Covered

- RESTful API architecture
- CRUD operations
- MongoDB document modeling
- Middleware usage (built-in + custom)
- Error handling
- Environment variable management

---

