import { uploadFile } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/errorHandler/asyncHandler.js";
import { sendEnquiryMail } from "../utils/nodeMailer.js";


//POST 
//Saves image in MongoDB and sends a copy for the same to the user on the email

export const saveImage = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const {image} = req.files

  console.log(image)
  return

  if (!name && !email && !image) {
    res
      .status(500)
      .json({ status: false, message: "Incomplete form parameters" });
  } else {
    const uploadedImage = uploadFile(image)
    await sendEnquiryMail(req.body);
    res.status(200).json({status: true, message: "Inquiry sent successfully"})
  }
});


