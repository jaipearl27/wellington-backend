import express from "express";
import { login, logout, refreshToken, signup } from "../controller/auth.js";


const authRouter = express.Router();
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);
authRouter.route("/refresh").post(refreshToken);

authRouter.route("/signup").post(signup); 

export default authRouter;
