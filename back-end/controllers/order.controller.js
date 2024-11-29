import express from "express";
import { Order } from "../model/order.model.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      orderNumber: 1,
      totalPrice: 15000,
      district: "HUD",
      khoroo: "18",
      apartment: "1103-205",
      createdDate: new Date(),
      process: "Active",
      userId: "674690d057356e8b4cf700d9",
      phoneNumber: "99114946",
      categoryId: "674690d057356e8b4cf700d9",
    });
    console.log(result);
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllOrder = async (request, response) => {
  const result = await Order.find().populate("User");

  response.json({
    success: true,
    data: result,
  });
};

export { getAllOrder, createOrder };
