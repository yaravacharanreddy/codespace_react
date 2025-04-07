Here's a complete `README.md` file for creating a **CRUD API using Express.js & MySQL**, following the same Node.js + Express.js tech stack, with MySQL integration:

# 📦 CRUD API using Express.js & MySQL

This project demonstrates a basic **CRUD (Create, Read, Update, Delete)** RESTful API using **Node.js**, **Express.js**, and **MySQL**.

---

## ⚙️ Prerequisites

- Node.js & npm
- MySQL installed and running
- Postman or curl for testing
- MySQL database and table created

---

## 🗄 Database Setup

### 1. Create Database and Table

---

## 🚀 Project Setup

### Initialize npm and Install Packages

```bash
npm init -y
npm install express mysql3
```
---

## 🧠 Step-by-Step

### 1. `db.js` – Database Connection

### 2. `index.js` – API Routes

---

## ▶️ Run the App

```bash
node index.js
```

---

## 🧪 Test Endpoints (Postman or curl)

### ✅ Create a User

```
POST /users
Body:
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

### ✅ Get All Users

```
GET /users
```

### ✅ Get User by ID

```
GET /users/1
```

### ✅ Update User

```
PUT /users/1
Body:
{
  "name": "Alice Updated",
  "email": "alice.updated@example.com"
}
```

### ✅ Delete User

```
DELETE /users/1
```

---

## 🧠 Summary

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| GET    | `/users`     | List all users    |
| GET    | `/users/:id` | Get user by ID    |
| POST   | `/users`     | Create new user   |
| PUT    | `/users/:id` | Update user       |
| DELETE | `/users/:id` | Delete user       |

---

## 🔒 Security Tips

- Sanitize inputs to prevent SQL injection
- Use environment variables for DB credentials
- Consider using an ORM like Sequelize or Prisma for large-scale apps

---
