import express from "express";
import { handleGeneratedImage, getData, getUsers, deleteData } from "../controller/game.js";
import { upload } from "../utils/multer.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";

const gameRouter = express.Router();
gameRouter
  .route("/")
  .post(upload.array("images"), handleGeneratedImage)
  .get(getData);
gameRouter.route("/users").get(verifyTokenMiddleware, getUsers);
gameRouter.route("/users/:id").delete(verifyTokenMiddleware, deleteData);

export default gameRouter;
