import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Yogurt bowl",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732477540/m3k0mfbz1xozkoacbhp8.png",
      ingredient: "Oat, yogurt, berries , banana",
      price: "9000",
      categoryId: "674929948d7746ef987104cd",
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
