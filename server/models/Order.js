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
    gig: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig", // Assuming you have a Gig model
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package", // Assuming you have a GigPackage model
    },
    totalPrice: {
      type: Number,
    },

    // I want to track the order status and the dates when the order status changes
    // So I will create an array of objects with the following fields:
    // status: String
    // date: Date
    // The status will be one of the following:
    // "Order Placed"
    // "Order Accepted"
    // "Order Rejected"
    // "Order Completed"
    // "Order Cancelled"
    // "Order Delivered"
    // "Order Refunded"
    // "Order Revision Requested"
    // "Order Revision Submitted"
    // "Order Revision Accepted"
    // "Order Revision Rejected"
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
    isRequirementSent: {
      type: Boolean,
      default: false,
    },
    isDeliverySubmitted: {
      type: Boolean,
      default: false,
    },
    isDeliveryAccepted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
