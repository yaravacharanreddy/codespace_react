Here's a complete `README.md` file for your **Hands-on Project: Backend User Management System** using **Node.js**, **Express.js**, and **MySQL**.

# 🧑‍💼 Backend User Management System

A complete hands-on backend project to build a **User Management System** using **Node.js**, **Express.js**, and **MySQL**. This app supports full CRUD operations and includes user role management, validation, and basic security practices.

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MySQL** – Relational Database
- **mysql2** – MySQL client for Node
- **dotenv** – Manage environment variables
- **express-validator** – Input validation

---

## 📦 Features

- Create, Read, Update, Delete users
- Role-based user data (Admin/User)
- Input validation
- MySQL DB integration
- Clean modular architecture

---

## 🛠 Setup Instructions

### Install Dependencies

```bash
npm install express mysql3 dotenv express-validator
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=user_management
```

**NOTE**: Choose `.env` variables as per your requirement

---

## 🗄️ MySQL Database Setup

### 1. Create the Database & Table

---

## 🔧 Steps

### 1. `config/db.js`

### 2. `controllers/userController.js`

### 3. `routes/userRoutes.js`

### 4. `index.js`

## 🔍 API Endpoints

| Method | Route           | Description          |
|--------|------------------|----------------------|
| GET    | `/api/users`     | Get all users        |
| GET    | `/api/users/:id` | Get user by ID       |
| POST   | `/api/users`     | Create new user      |
| PUT    | `/api/users/:id` | Update user by ID    |
| DELETE | `/api/users/:id` | Delete user by ID    |

---

## 🧪 Sample POST Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePass123",
  "role": "user"
}
```

---
