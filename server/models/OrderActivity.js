import mongoose from "mongoose";

const orderActivity = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    activity: [
      {
        text: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    gig: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig",
    },
  },
  {
    timestamps: true,
  }
);

const OrderActivity = mongoose.model("OrderActivity", orderActivity);
export default OrderActivity;
