import cartModel from "../Models/Cart.js";

// add to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, title, price, qty } = req.body;
    const userId = req.user._id;

    let cart = await cartModel.findOne({ userId: userId });

    if (!cart) {
      cart = new cartModel({ userId: userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
      cart.items[itemIndex].price += price * qty;
    } else {
      cart.items.push({ productId, title, price, qty });
    }

    await cart.save();
    res.json({ message: "Items added to cart", cart, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to cart", error: error.message });
  }
};

//get user cart

export const userCart = async (req, res) => {
  const userId = req.user._id;

  let cart = await cartModel.findOne({ userId: userId });
  if (!cart) return res.json({ message: "cart not found" });

  res.json({ message: "User cart", cart });
};

//remove product from cart
export const renoveProductFromCart = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user;

  let cart = await cartModel.findOne({ userId });
  if (!cart) return res.json({ message: "cart not found" });

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId
  );
  await cart.save();

  res.json({ message: "Product has been Remove From cart" });
};

//clear cart
export const clearCart = async (req, res) => {
  const userId = req.user;

  let cart = await cartModel.findOne({ userId });
  if (!cart) {
    cart = new cartModel({ items: [] });
  } else {
    cart.items = [];
  }

  await cart.save();

  res.json({ message: "Cart is empty" });
};

//decrease qty from cart
export const decreaseProductQty = async (req, res) => {
  try {
    const { productId, qty } = req.body;
    const userId = req.user._id;

    let cart = await cartModel.findOne({ userId: userId });

    if (!cart) {
      cart = new cartModel({ userId: userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      const item = cart.items[itemIndex];

      if (item.qty > qty) {
        const pricePerUnit = item.price / item.qty;

        item.qty -= qty;
        item.price -= pricePerUnit * qty;
      } else {
        cart.items.splice(itemIndex, 1);
      }
    } else {
      return res.json({ message: "Invalid product id " });
    }

    await cart.save();
    res.json({ message: "Items Qty Decreased", cart, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to cart", error: error.message });
  }
};
