import express from "express";
import { createUser, getAllUser } from "../controllers/user.js";

const orderRouter = express.Router();

orderRouter.get("/users", getAllUser);
orderRouter.post("/users", createUser);

export default orderRouter;
