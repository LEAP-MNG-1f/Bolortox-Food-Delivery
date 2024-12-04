import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Vegan food",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1733303373/sz0fswc3ifydisyax5vu.png",
      ingredient:
        "White bean , Black bean , Spinach , Pumpkin , Salsa , Grounded beef",
      price: "54900",
      categoryId: "674fc08f71a90d15afa94762",
    });
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    throw new error(error.message);
  }
};

const getAllFood = async (request, response) => {
  const result = await Food.find().populate("categoryId");
  response.json({
    success: true,
    data: result,
  });
};
export { getAllFood, createFood };
