import { request, response } from "express";
import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Jamxz",
    email: "Jamxz@gmail.com",
    password: "Jamxz12345",
    phoneNumber: 99114657,
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
