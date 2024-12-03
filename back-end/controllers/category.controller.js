import { Category } from "../model/category.model.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create({
      name: "Dinner",
    });
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    throw new error(error.message);
  }
};

const getAllCategories = async (request, response) => {
  const result = await Category.find();
  response.json({
    success: true,
    data: result,
  });
};
export { createCategory, getAllCategories };
