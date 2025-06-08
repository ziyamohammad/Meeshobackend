import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    number:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
        required:true
    },
    otpExpiration:{
        type:Date,
        default:Date.now,
        get:(otpExpiration)=>otpExpiration.getTime(),
        set:(otpExpiration)=>new Date(otpExpiration)
    }

},{timestamps:true})
 export const user = new mongoose.model("user",UserSchema)