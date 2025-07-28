# 🛒 E-Commerce Backend API (Node.js + Express + MongoDB)

This is a fully functional backend API for an e-commerce application built with **Node.js**, **Express.js**, and **MongoDB**. It includes features like user registration & login (with JWT), product management, and cart operations.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- RESTful APIs
- Postman (for testing)

---

## 📁 Folder Structure


---

## 🚀 Features

### 👤 User
- Register
- Login (JWT token-based)

### 📦 Product
- Add Product
- Get All Products
- Get Product by ID
- Update Product
- Delete Product

### 🛒 Cart
- Add to Cart
- Get User Cart
- Remove Item
- Decrease Quantity
- Clear Cart

---

## 🔐 Authentication

JWT token-based authentication is required for all cart-related operations. Use the token as a header:



---

## 📮 API Endpoints Summary

| Method | Endpoint                 | Description           |
|--------|--------------------------|-----------------------|
| POST   | /api/user/register       | Register a new user   |
| POST   | /api/user/login          | Login user            |
| POST   | /api/product/add         | Add a new product     |
| GET    | /api/product/all         | Get all products      |
| GET    | /api/product/:id         | Get product by ID     |
| PUT    | /api/product/:id         | Update product        |
| DELETE | /api/product/:id         | Delete product        |
| POST   | /api/cart/add            | Add item to cart      |
| GET    | /api/cart/user           | Get user cart         |
| DELETE | /api/cart/remove/:id     | Remove product from cart |
| POST   | /api/cart/--qty          | Decrease product qty  |
| DELETE | /api/cart/clear          | Clear entire cart     |

---

## 📦 Installation (Local Setup)

```bash
git clone https://github.com/your-username/ecommerce-backend-nodejs.git
cd E-commerce
npm install
