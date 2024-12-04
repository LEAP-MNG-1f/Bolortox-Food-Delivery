import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Pumpkin Soup",
      image:
        "https://www.seriouseats.com/thmb/DvSDZoMw8WSOQFAMgf3L2wlfY9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/053123_TomatoSoup-MPPSoupsAndStews-Morgan-Hunt-Glaze-f59a081d7efb4625a75a1a907a6b1cbf.jpg",
      ingredient: "Pumpkin , garlic , pepper, parsley, salt",
      price: "43000",
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
