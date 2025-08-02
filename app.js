import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import userRouter from './Routes/userRoute.js';
import productRouter from './Routes/productRoute.js';
import cartRouter from './Routes/cartRoute.js';
import adminRouter from './Routes/adminRoutes.js';

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
//admin route
app.use("/api/admin/dashboard", adminRouter);  


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
