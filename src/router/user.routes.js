import {Router} from "express";
import { otpsender, otpverify} from "../controller/user.controller.js";

const router = Router();

router.route("/otp-sent").post(otpsender)
router.route("/otp-verify").post(otpverify)

export default router