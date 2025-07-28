# 🛒 E-Commerce Backend API

This is the complete **Node.js + Express.js + MongoDB** backend for an E-Commerce website. It includes:

- User Authentication using JWT
- Product Management (CRUD)
- Shopping Cart Management
- Protected Routes using Middleware
- Fully tested with Postman

---

## 📁 Project Structure

ecommerce/
│
├── config/ # DB connection config
│ └── db.js
│
├── Controllers/ # All logic/controllers
│ ├── cartController.js
│ ├── productController.js
│ └── user.js
│
├── Middlewares/
│ └── Auth.js # JWT verification middleware
│
├── Models/ # Mongoose schemas
│ ├── Cart.js
│ ├── Product.js
│ └── User.js
│
├── Routes/ # API route files
│ ├── cart.js
│ ├── product.js
│ └── user.js
│
├── .env # Secrets & env variables
├── .gitignore
├── app.js # App initialization
├── server.js # Server entry point
├── package.json
└── README.md

yaml
Copy
Edit



---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Postman for testing
- MVC Pattern

---

## 🚀 API Endpoints

### 👤 User APIs
| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | /api/user/register   | Register new user   |
| POST   | /api/user/login      | Login existing user |

---

### 📦 Product APIs
| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | /api/product/add     | Add new product         |
| GET    | /api/product/all     | Get all products        |
| GET    | /api/product/:id     | Get product by ID       |
| PUT    | /api/product/:id     | Update product by ID    |
| DELETE | /api/product/:id     | Delete product by ID    |

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

## 🔐 Authentication

JWT is used to protect certain routes like Cart APIs.

### 🔑 Header Example:


---

## 🧪 How to Test with Postman

1. Register a user via `/api/user/register`
2. Login and copy the JWT token
3. Use the token as a header (`Auth`) to test protected routes
4. Use the Product APIs to create products
5. Use the Cart APIs to simulate shopping cart actions

---

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