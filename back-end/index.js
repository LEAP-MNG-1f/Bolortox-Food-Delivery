import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

const server = express();
server.use(cors());
const PORT = 8000;

server.get("/", (request, response) => {
  response.send("Hello world");
});

server.post("/assets", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    const uploadResult = await cloudinary.uploader.upload(
      "./assets/Breakfast.png"
    );
    console.log(uploadResult);
  } catch (error) {
    console.log("cloudinary error", error);
  }
});

server.listen(PORT, () => {
  console.log(`server is worl=king http://localhost:${PORT}`);
});

console.log("Password", process.env.PASSWORD);
