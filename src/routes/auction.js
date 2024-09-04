import express from 'express'
import { addProperties, getProperties } from '../controller/auction.js';

const auctionRouter = express.Router();
auctionRouter.route('/').get(getProperties).post(addProperties);
export default auctionRouter;