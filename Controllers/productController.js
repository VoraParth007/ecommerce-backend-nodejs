import productModel from "../Models/Product.js";

//add product

export const addProduct = async (req, res) => {
  try {
    let product = await productModel.create(req.body);
    res.json({ message: "Product added successfully", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

//get all product

export const getAllProducts = async (req, res) => {
  try {
    let product = await productModel.find();
    if (!product)
      return res.json({ message: "No Product Find", success: false });

    res.json({ message: "Fetched all products", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

//get Product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await productModel.findById(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({ message: "Fetched specific Product", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

//update product by id
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product updated Successfully.!",
      product,
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//delete Product
export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await productModel.findByIdAndDelete(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product has been Deleted Successfully.!",
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};
