import express from "express";
import { createOrder, getAllOrder } from "../controllers/user.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrder);
orderRouter.post("/orders", createOrder);

export default orderRouter;
