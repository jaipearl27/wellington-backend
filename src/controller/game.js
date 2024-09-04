import { usersModel } from "../model/users.js";
import { uploadFile } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/errorHandler/asyncHandler.js";
import { sendMail } from "../utils/nodeMailer.js";


//POST 
//Saves generated image in cloudinary & url in MongoDB and sends a copy for the same to the user on the email

export const handleGeneratedImage = asyncHandler(async (req, res) => {
  const { name, email } = req?.body;

  if (!name && !email && !req?.files) {
    res
      .status(500)
      .json({ status: false, message: "Incomplete form parameters" });
  } else {
    const uploadedImage = await uploadFile(req?.files)
    const payload = {
      name,
      email,
      image: uploadedImage.result
    }
    await usersModel.create(payload)
    await sendMail(req.body);
    
    res.status(200).json({status: true, message: "Image saved & mail sent successfully"})
  }
});

//GET
// GET paginated user data 

export const getData = asyncHandler(async (req, res) => {
  const limit = req?.query?.limit || 12;
  const page = req?.query?.page || 1;
  const skip = (page - 1) * limit;
  let totalPages = 0;
  const totalUsers = await usersModel.countDocuments();
  totalPages = Math.ceil(totalUsers / limit);

  const result = await usersModel.find().skip(skip).limit(limit)
  res.status(200).json({status: true, totalPages, page, result:result})
})

