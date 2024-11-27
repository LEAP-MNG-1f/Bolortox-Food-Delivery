import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const orderRouter = express.Router();

orderRouter.get("/users", getAllUsers);
orderRouter.post("/users", createUser);

export default orderRouter;
