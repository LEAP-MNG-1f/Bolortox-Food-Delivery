import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.post("/category", createCategory);
categoryRouter.get("/category", getAllCategories);

export { categoryRouter, getAllCategories };
