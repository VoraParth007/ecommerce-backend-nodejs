import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../Controllers/productController.js";

import { isAuthenticated } from "../Middlewares/Auth.js";
import { authorizeRoles } from "../Middlewares/authorizeRoles.js";


const router = express.Router();

//! @route   POST /api/product/add
//! @desc    Add a new product (Admin only)
router.post("/add", isAuthenticated, authorizeRoles("admin"), addProduct);

//! @route   GET /api/product/all
//! @desc    Get all products (Any authenticated user)
router.get("/all", isAuthenticated, getAllProducts);

//! @route   GET /api/product/:id
//! @desc    Get single product by ID (Public or Authenticated)
router.get("/:id", getProductById); 

//! @route   PUT /api/product/:id
//! @desc    Update product by ID (Admin only)
router.put("/:id", isAuthenticated, authorizeRoles("admin"), updateProductById);

//! @route   DELETE /api/product/:id
//! @desc    Delete product by ID (Admin only)
router.delete("/:id", isAuthenticated, authorizeRoles("admin"), deleteProductById);

export default router;
