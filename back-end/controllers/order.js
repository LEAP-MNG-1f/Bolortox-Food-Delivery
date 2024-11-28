import { Order } from "../model/order.js";
import express from "express";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: 98000,
    district: "BZD",
    khoroo: "25",
    apartment: "22",
    createdDate: new Date(),
    process: "Active",
    userId: "674690d057356e8b4cf700d9",
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllOrder = async (request, response) => {
  const result = await Order.find().populate("User");

  response.json({
    success: true,
    data: result,
  });
};

export { getAllOrder, createOrder };
