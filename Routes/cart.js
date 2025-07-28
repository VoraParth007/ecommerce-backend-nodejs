import express from "express";
import { addToCart, clearCart, decreaseProductQty, renoveProductFromCart, userCart } from "../Controllers/cartController.js";
import { isAuthenticated } from "../Middlewares/Auth.js";
const router = express.Router();

//add to cart   
//! @api /api/cart/add
router.post('/add',isAuthenticated,addToCart)

//get user cart
//! @api /api/cart/user
router.get('/user',isAuthenticated,userCart)


//Remove Product from cart
//! @api /api/cart/remove/:productId
router.delete('/remove/:productId',isAuthenticated,renoveProductFromCart)


//clear cart
//! @api /api/cart/clear
router.delete('/clear',isAuthenticated,clearCart);


//decrease qty
//!  @api /api/cart/--qty
router.post('/--qty',isAuthenticated,decreaseProductQty)


export default router;