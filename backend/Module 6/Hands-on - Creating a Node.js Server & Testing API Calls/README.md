# 🚀 Express Server with API Routes & Postman Testing

This project demonstrates how to set up a basic **Node.js + Express.js** server with multiple API routes and test them using **Postman**. It also includes middleware like **body-parser** to handle request bodies.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- body-parser
- Postman (for API testing)

---

## 📦 Installation Steps

### 1. Initialize the Project

```bash
npm init -y
```

### 2. Install Dependencies

```bash
npm install express body-parser
```

---

## 🔧 Setting Up Express Server (`index.js`)

## 📂 API Routes (`routes/apiRoutes.js`)

## 🧪 Testing API with Postman

### Base URL

```
http://localhost:3000/api
```

### Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/users`         | Get all users       |
| GET    | `/users/:id`     | Get single user     |
| POST   | `/users`         | Add new user        |
| PUT    | `/users/:id`     | Update existing user|
| DELETE | `/users/:id`     | Delete user         |

---

### Sample POST Body

```json
{
  "name": "Charlie"
}
```

---

## 🔍 Middleware - `body-parser`

- `body-parser.json()` parses incoming requests with JSON payloads.
- Helps access `req.body` in POST/PUT requests.

---
