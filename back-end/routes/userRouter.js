import express from "express";
import { createUser, getAllUser } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUser);
userRouter.post("/users", createUser);

export { userRouter };
