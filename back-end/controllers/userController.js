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

const getAllUsers = (request, response) => {
  const result = User.find();
  response.json({
    success: true,
    data: result,
  });
};
export { getAllUsers, createUser };
