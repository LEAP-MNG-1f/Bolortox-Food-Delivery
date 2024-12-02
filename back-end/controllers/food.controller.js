import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Oreo Shake",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732477151/nuthws85m7emfmybquzx.png",
      ingredient:
        "Oreo , Vanilla sugar, Milk , Ice , Chocolate syrup , Chocolate Vanilla ice cream",
      price: "89000",
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
