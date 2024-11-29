import mongoose from "mongoose";

const processEnum = {
  values: ["Progress", "Delivered", "Waiting", "Active"],
};
const paymentTypeEnum = {
  values: ["Cash", "Card"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
    default: "Progress",
  },
  createdDate: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: paymentTypeEnum,
    default: "Card",
  },
  detail: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
