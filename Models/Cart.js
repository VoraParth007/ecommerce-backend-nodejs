import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product", // Ensure "product" is your model name
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // Ensure "user" is your model name
      required: true,
    },
    items: [cartItemSchema],
  },
  {
    timestamps: true, // ✅ Helps in tracking cart creation/update
  }
);

const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;
