import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import connectDb from "./connectDB.js";
import { ObjectId } from "mongodb";

const server = express();
server.use(cors());
const PORT = 8001;

// server.post("/assets", async (request, response) => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_NAME,
//       api_key: process.env.CLOUDINARY_KEY,
//       api_secret: process.env.CLOUDINARY_SECRET,
//     });
//     const uploadResult = await cloudinary.uploader.upload(
//       "./assets/SmoothieBowl.png"
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

//   const collection = db.collection("product");
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

const newdate = new Date();

server.put("/update-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.updateOne(
    {
      _id: new ObjectId("6740024f6941328ea36b3e17"),
    },
    {
      $set: { price: "8800", date: newdate },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.deleteOne({
    _id: new ObjectId("6740024f6941328ea36b3e17"),
  });

  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});

console.log("Password", process.env.PASSWORD);
