import express from 'express'
import { handleGeneratedImage, getData } from '../controller/game.js'
import {upload} from '../utils/multer.js'

const gameRouter = express.Router();
gameRouter.route('/').post(upload.array('images'), handleGeneratedImage).get(getData);

export default gameRouter;