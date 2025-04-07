Here's a `README.md` file that guides you through building a simple **Node.js + Express.js** project to demonstrate **HTTP Methods**: `GET`, `POST`, `PUT`, and `DELETE`.

# 🌐 REST API with Node.js & Express.js

This project demonstrates the use of **HTTP Methods** using **Node.js** and **Express.js**:

✅ GET  
✅ POST  
✅ PUT  
✅ DELETE

A simple in-memory array is used as a data store to simulate basic CRUD operations.

---

## ⚙️ Prerequisites

- Node.js & npm installed
- Code editor (VS Code recommended)
- Postman or browser for testing endpoints

---

## 📦 Project Setup

### Initialize Node.js Project

```bash
npm init -y
```

### Install Express

```bash
npm install express
```

---

## 🧑‍💻 Code: `index.js`

---

## ▶️ Run the Server

```bash
node index.js
```

**NOTE**: Before run the above command check with the respective folder

Your server will be running at:  
🔗 `http://localhost:3000`

---

## 🧪 Test API Endpoints

You can use **Postman** or **curl** to test.

### 1. GET all users

```
GET /users
```

### 2. GET user by ID

```
GET /users/1
```

### 3. POST create user

```
POST /users
Body: { "name": "Charlie" }
```

### 4. PUT update user

```
PUT /users/1
Body: { "name": "Updated Name" }
```

### 5. DELETE user

```
DELETE /users/1
```

---

## 💡 Summary

- `GET` → Read
- `POST` → Create
- `PUT` → Update
- `DELETE` → Remove

This is a basic REST API to demonstrate HTTP methods using Express.js and Node.js. You can later connect this to MongoDB or any other database for persistence.

---
