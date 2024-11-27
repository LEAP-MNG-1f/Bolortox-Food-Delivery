import { request, response } from "express";
import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Bolortox",
    email: "Btox@gmail.com",
    password: "Bolor12345",
    phoneNumber: 60490046,
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllUser = async (request, response) => {
  const result = await User.find();
  response.json({
    success: true,
    data: result,
  });
};
export { getAllUser, createUser };
