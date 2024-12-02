import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Pizza",
      image:
       "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732474813/gkt8okbs4idtwakascq6.png",
      ingredient: " Grounded beef, Cheese, Lettuce, Tomato, Pepperoni, Onions, Tomato sauce, Mustard sauce",
      price: "28000",
      categoryId: "67492f896ba784bf4bd9e153",
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
