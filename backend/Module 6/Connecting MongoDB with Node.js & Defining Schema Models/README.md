Here's a complete `README.md` file for a project on **Connecting MongoDB with Node.js** and **Defining Schema Models** using **Mongoose**.

# 🌿 Connecting MongoDB with Node.js & Defining Schema Models

A beginner-friendly guide and project to connect your **Node.js** application with **MongoDB** using **Mongoose**, define schema models, and perform basic CRUD operations.

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM (Object Data Modeling)
- **dotenv** – Environment configuration

---

## 🎯 Project Objective

- Connect Node.js backend to MongoDB
- Create and use Mongoose models
- Implement CRUD operations
- Organize code into modular structure

---

## 📦 Setup Instructions

### Install

```bash
npm init -y
npm install express mongoose dotenv
```

### 2. MongoDB Setup

Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance. Create a new cluster and get the connection URI.

### 3. Create `.env` File

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
```

---

## 🔌 Database Connection (`config/db.js`)

## 🧩 Define Schema Model (`models/User.js`)

## 🧠 Controller Logic (`controllers/userController.js`)

## 🧭 Routes (`routes/userRoutes.js`)

## 🔥 Entry Point (`index.js`)

---

## 📬 API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| GET    | `/api/users`     | Get all users    |
| POST   | `/api/users`     | Add new user     |
| PUT    | `/api/users/:id` | Update a user    |
| DELETE | `/api/users/:id` | Delete a user    |

---

## 🧪 Sample Request Body (POST)

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}
```

---
