import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

const userModel = mongoose.model('user',userSchema)
export default  userModel;
