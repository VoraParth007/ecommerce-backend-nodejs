import express from "express";
import { addProduct } from "../Controllers/productController.js";
import { isAuthenticated } from "../Middlewares/Auth.js";
import { authorizeRoles } from "../Middlewares/authorizeRoles.js";
const router = express.Router();

router.get(
  "/admin/dashboard",
  isAuthenticated,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin!", user: req.user });
  }
);

router.post(
  "/add",
  isAuthenticated,
  authorizeRoles("admin"), // ✅ only admin can add product
  addProduct
);

export default router;
