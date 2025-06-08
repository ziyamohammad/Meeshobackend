import {Router} from "express";
import { otpsender } from "../controller/user.controller.js";

const router = Router();

router.route("/otp-sent").post(otpsender)

export default router