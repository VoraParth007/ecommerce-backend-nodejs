import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../Controllers/productController.js";

const router = express.Router();

//add product
//! @api /api/product/add
router.post("/add", addProduct);

//get all Products
//! @api /api/product/all
router.get("/all", getAllProducts);

//get product by id
//! @api /api/product/:id
router.get("/:id", getProductById);

//update product by id
//! @api /api/product/:id
router.put("/:id", updateProductById);

//delete product by id
//! @api /api/product/:id
router.delete("/:id", deleteProductById);


export default router;
