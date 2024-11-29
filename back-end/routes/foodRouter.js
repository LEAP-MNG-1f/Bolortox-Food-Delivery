import express from "express";
import { createFood } from "../controllers/food.controller.js";

const foodRouter = express.Router();

foodRouter.post("/food", createFood);

export { foodRouter };
