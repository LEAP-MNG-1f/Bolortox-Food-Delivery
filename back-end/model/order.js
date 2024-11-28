import mongoose from "mongoose";

const processEnum = {
  values: ["Progress", "Delivered", "Waiting", "Active"],
};

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
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
  createdAt: {
    type: Date,
    deafault: () => Date.now(),
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
  createdDate: {
    type: Date,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
