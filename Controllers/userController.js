import userModel from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//user register
export const register = async (req, res) => {
  const { name, email, password,role } = req.body;

  let user = await userModel.findOne({ email });
  if (user) return res.json({ message: "User already exist", success: false });

  const hashPassword = await bcrypt.hash(password, 10);

  user = await userModel.create({
    name,
    email,
    password: hashPassword,
    role : role || "user",//default to user
  });

  res.json({ message: "User Register Successfully..!", user, success: true });
};

//user login
export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.json({ message: "user not exist", success: false });

  const validpassword = await bcrypt.compare(password, user.password);
  if (!validpassword)
    return res.json({ message: "INVALID PASSWORD", success: false });

  const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
    expiresIn:'30d'
  })

  res.json({message:`Welcome ${user.name}`,token,success:true})
};
