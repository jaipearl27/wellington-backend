import express from 'express'
import { submitEnquiry } from '../controller/contact.js'

const contactRouter = express.Router();
contactRouter.route('/enquiry').post(submitEnquiry);
export default contactRouter;