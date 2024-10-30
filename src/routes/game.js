import express from "express";
import { handleGeneratedImage, getData, getUsers } from "../controller/game.js";
import { upload } from "../utils/multer.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";

const gameRouter = express.Router();
gameRouter
  .route("/")
  .post(upload.array("images"), handleGeneratedImage)
  .get(getData);
gameRouter.route("/users").get(verifyTokenMiddleware, getUsers);
export default gameRouter;
