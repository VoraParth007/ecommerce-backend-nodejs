import express from "express";
import { login, register } from "../Controllers/userController.js";

const router = express.Router();


//register
//! @api - /api/user/register
router.post('/register',register)

//login
//! @api - /api/user/login
router.post('/login',login)

export default router;