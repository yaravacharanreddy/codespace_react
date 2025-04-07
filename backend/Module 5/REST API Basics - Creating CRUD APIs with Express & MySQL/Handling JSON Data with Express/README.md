Here's the `.md` guide for **Handling JSON Data with Express using `express.json()`**, aligned with the same Node.js + Express.js tech stack you’ve been using:

# 📦 Handling JSON Data in Express with `express.json()`

This guide explains how to handle JSON data in an Express.js app using the built-in `express.json()` middleware. We'll walk through a sample project using `Node.js + Express.js`.

---

## 📚 What is `express.json()`?

`express.json()` is a built-in middleware function in Express. It parses incoming JSON requests and puts the parsed data in `req.body`.

Without it, Express cannot parse `application/json` payloads.

---

## ⚙️ Prerequisites

- Node.js & npm installed
- Basic knowledge of Express
- Postman or curl for testing

---

## 🛠 Project Setup

### 1. Initialize a New Project

```bash
npm init -y
```

### 2. Install Express

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

---

## 🧪 Test Using Postman or curl

### ✅ POST /students

**Request URL:**  
`http://localhost:3000/students`(change it according to your requirement)

**Method:**  
`POST`

**Headers:**
```json
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "Alice",
  "age": 22
}
```

**Expected Response:**
```json
{
  "id": 1712476543210,
  "name": "Alice",
  "age": 22
}
```

---

### ✅ GET /students

**Request URL:**  
`http://localhost:3000/students`

**Method:**  
`GET`

**Response:**
```json
[
  {
    "id": 1712476543210,
    "name": "Alice",
    "age": 22
  }
]
```

---

## ⚠️ Without `express.json()`

If you comment out or remove `app.use(express.json())`, the `req.body` will be `undefined`, and your API won't work with JSON payloads.

---

## 🧠 Summary

- Use `express.json()` to parse JSON payloads
- Essential for working with REST APIs that accept `application/json`
- Always apply it **before your route handlers**

---

## 📌 Tips

- Place `app.use(express.json())` near the top of your middleware stack.
- For URL-encoded forms, use: `app.use(express.urlencoded({ extended: true }))`
- You can handle raw streams with `express.raw()` and plain text with `express.text()`

---
