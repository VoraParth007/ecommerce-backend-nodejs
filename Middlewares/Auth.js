import jwt from "jsonwebtoken";
import userModel from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Auth"); // ✅ Use 'Auth' only if Postman sends it with this key
    if (!token) {
      return res.status(401).json({ message: "Login First" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Will throw if token is invalid
    const id = decoded.userId;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid or malformed token" });
  }
};
