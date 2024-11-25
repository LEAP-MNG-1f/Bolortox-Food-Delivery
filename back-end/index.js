import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import animeModel from "./model/anime.js";
import userRouter from "./routes/userRouter.js";
import { createUser } from "./controllers/userController.js";

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);

const server = express();
server.use(cors());
const PORT = 8001;
server.use("/api", userRouter);

// server.get("/get", async (req, res) => {
//   const result = await animeModel.find({
//     name: "Naruto",
//     year: 1998,
//   });

//   res.json({
//     success: true,
//     data: result,
//   });
// });

// server.post("/create", async (req, res) => {
//   const result = await animeModel.create({
//     name: "Naruto",
//     year: 1998,
//   });

//   res.json({
//     success: true,
//     data: result,
//   });
// });

// server.delete("/delete", async (req, res) => {
//   const result = await animeModel.deleteOne({
//     _id: "6743f29ef2a4f83dcba5902e",
//   });

//   res.json({
//     success: true,
//     data: result,
//   });
// });

// server.post("/assets", async (request, response) => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_NAME,
//       api_key: process.env.CLOUDINARY_KEY,
//       api_secret: process.env.CLOUDINARY_SECRET,
//     });
//     const uploadResult = await cloudinary.uploader.upload(
//       "./assets/YoghurtOat.png"
//     );
//     console.log(uploadResult);
//   } catch (error) {
//     console.log("cloudinary error", error);
//   }
// });

// server.get("/", async (req, response) => {
//   const db = await connectDb();

//   let collection = db.collection("movies");
//   let results = await collection.find().limit(10).toArray();

//   console.log(results);
//   response.json({
//     success: true,
//     data: results,
//   });
// });

// server.post("/create-user", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");+
//   const result = await collection.insertOne({
//     name: "Porsche",
//     email: "Bolortox",
//     price: "8800",
//     date:
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// const newdate = new Date();

// server.put("/update-user", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.updateOne(
//     {
//       _id: new ObjectId("6740024f6941328ea36b3e17"),
//     },
//     {
//       $set: { price: "8800", date: newdate },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.delete("/delete-user", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("6740024f6941328ea36b3e17"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});

// console.log("Password", process.env.PASSWORD);
