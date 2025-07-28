import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';

import connectDB from "./config/db.js";
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//user router
app.use('/api/user',userRouter)
//product router
app.use('/api/product',productRouter)
//cart router
app.use('/api/cart',cartRouter)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
