import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRouter.js";
import { categoryRouter } from "./routes/categoryRouter.js";
import { foodRouter } from "./routes/foodRouter.js";
import { orderRouter } from "./routes/orderRouter.js";
import { v2 as cloudinary } from "cloudinary";
mongoose.connect(
  "mongodb+srv://bolortogosboujee:YKQJCyO8XUM1rnmN@bolortox.i93uz.mongodb.net/food-delivery"
);
const PORT = 8001;
const server = express();

server.use(cors());
server.use("/api", userRouter);
server.use("/api", categoryRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);

server.post("/image-upload", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    const uploadResult = await cloudinary.uploader.upload("./assets/Lunch.png");
    console.log(uploadResult);
  } catch (error) {
    console.log("cloudinary error", error);
  }
});

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});
