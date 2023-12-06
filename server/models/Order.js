// const mongoose = require("mongoose");

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model for sellers
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model for buyers
    },
    gigId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig", // Assuming you have a Gig model
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package", // Assuming you have a GigPackage model
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
    },
    paymentIntent: {
      type: String,
    },
    paymentIntentClientSecret: {
      type: String,
    },
    paymentStatus: {
      type: String,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    deliveryDays: {
      type: Number,
    },
    orderEndDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
