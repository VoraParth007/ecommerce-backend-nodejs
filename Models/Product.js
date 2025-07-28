import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { strict: false });

const productModel = mongoose.model("product", productSchema);
export default productModel;
