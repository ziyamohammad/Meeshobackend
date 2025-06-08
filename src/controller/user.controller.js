import { asynchandler } from "../utils/Asynchandler.js";
import otpGenerator from "otp-generator";
import twilio from "twilio"
import Apierror from "../utils/Apierror.js";

const accountsid = process.env.TWILIOACCOUNT_SID;
const authtoken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountsid,authtoken)
const otpsender = asynchandler(async(req,res)=>{
    const {number}=req.body

    if(!number){
        throw new Apierror(400,"please enter the number");
    }

     const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  try{
     const message = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from:`+1 762 769 7988`,
      to: `+91${number}` 
    });

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      sid: message.sid,
      otp: otp, 
    });
  }catch(error){
    console.log("error in sending otp",error)
  }
})

export {otpsender}