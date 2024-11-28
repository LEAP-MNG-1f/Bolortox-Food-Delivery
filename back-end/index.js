import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRouter.js";
import { orderRouter } from "./routes/orderRouter.js";

mongoose.connect(
  "mongodb+srv://bolortogosboujee:YKQJCyO8XUM1rnmN@bolortox.i93uz.mongodb.net/food-delivery"
);
const PORT = 8001;
const server = express();

server.use(cors());
server.use("/api", userRouter);
server.use("/api", orderRouter);

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});
