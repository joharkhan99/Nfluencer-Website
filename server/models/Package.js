import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisions: {
      type: Number,
      required: true,
    },
    support: {
      type: Boolean,
    },
    extraDeliveryTime: {
      type: Number,
    },
    extraDeliveryPrice: {
      type: Number,
    },
    extraRevisions: {
      type: Number,
    },
    extraRevisionPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
