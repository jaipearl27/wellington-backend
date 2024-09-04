import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  image: {
    type: [],
    required: [true, "image is required"],
  },
 }, {timestamps: true});

export const usersModel = mongoose.model(
  "users",
  usersSchema,
  "users"
);
