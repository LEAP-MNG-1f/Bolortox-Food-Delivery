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

export { createCategory };
