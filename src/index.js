import dotenv from "dotenv" ; 
import app from "./app.js";
import { dbconnect } from "./Database/dbconnect.js";

dotenv.config({
    path:"./env"
})

dbconnect()
.then(()=>{
    app.on("error",()=>{
        console.log("error",error);
        throw error;
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT} `)
    })
})