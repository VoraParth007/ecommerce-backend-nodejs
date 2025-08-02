# 🛒 E-Commerce Backend API

This is the complete **Node.js + Express.js + MongoDB** backend for an E-Commerce website. It includes:

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Role-based Authorization (Admin/User)
- MVC Pattern
- Postman for API testing
---

## 🚀 Features

- ✅ User Register & Login (JWT)
- ✅ Role-based Access Control
- ✅ Admin-only Product Management (Add/Delete/Update)
- ✅ Users can view all products
- ✅ Cart: Add, Remove, Clear items
- ✅ Protected routes using custom middleware

---


## 🚀 API Endpoints

👤 User APIs
| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | /api/user/register   | Register new user   |
| POST   | /api/user/login      | Login existing user |

---

📦 Product APIs
| Method | Endpoint           | Access     | Description          |
| ------ | ------------------ | ---------- | -------------------- |
| POST   | `/api/product/add` | Admin      | Add new product      |
| GET    | `/api/product/all` | User/Admin | Get all products     |
| GET    | `/api/product/:id` | Public     | Get product by ID    |
| PUT    | `/api/product/:id` | Admin      | Update product by ID |
| DELETE | `/api/product/:id` | Admin      | Delete product by ID |


---

### 🛒 Cart APIs (Protected)
Use token in headers:  
**Header**: `Auth: <JWT_TOKEN>`

| Method | Endpoint                    | Description                  |
|--------|-----------------------------|------------------------------|
| POST   | /api/cart/add               | Add item to cart             |
| GET    | /api/cart/user              | Get user cart                |
| DELETE | /api/cart/remove/:productId | Remove product from cart     |
| POST   | /api/cart/--qty             | Decrease quantity of product |
| DELETE | /api/cart/clear             | Clear entire cart            |

---

---

🧪 How to Test with Postman

1.Register User → /api/user/register
2.Login → /api/user/login → copy token
3.Use Auth Header in Postman:

Key: Auth
Value: <JWT_TOKEN>

4.Create Product (Admin Only) → /api/product/add
5.View Products → /api/product/all
6.Add to Cart → /api/cart/add
7.View Cart → /api/cart/user

---

📦 Environment Variables
Create a .env file:
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## 🛠️ Installation & Setup

```bash
git clone https://github.com/VoraParth007/ecommerce-backend-nodejs.git
cd ecommerce-backend-nodejs
npm install


👨‍💻 Author
Your Parth Vora
Backend Developer
🔗 GitHub: https://github.com/VoraParth007/
🔗 LinkedIn: https://www.linkedin.com/in/parth777

📌 Status
✅ Backend Complete
🚧 Frontend Coming Soon