import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

import userRouter from "./router/user.routes.js"

app.use("/api/v1/user",userRouter);


export default app;