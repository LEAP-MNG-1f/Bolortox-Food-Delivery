import express from "express";
import { createFood, getAllFood } from "../controllers/food.controller.js";

const foodRouter = express.Router();

foodRouter.post("/food", createFood);

foodRouter.get("/food", getAllFood);

export { foodRouter };
