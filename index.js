import dotenv from "dotenv";
import express from "express";
import chalk from "chalk";
import cors from "cors";
import { mongoConnect } from "./src/config/db.js";
import { error } from "./src/middleware/error.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3001", "http://localhost:3000", "https://wellington-1.vercel.app"],
    // credentials: true, //uncomment this if you want to send tokens in cookie from frontend
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    exposedHeaders: ["*", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("It Works");
});

// routes


app.use(error);
app.listen(PORT, () => {
  console.log(chalk.bgBlue(`Server Listening to PORT ${PORT}`));
  mongoConnect();
});
