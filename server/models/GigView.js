import mongoose from "mongoose";

const gigViewSchema = new mongoose.Schema(
  {
    gigId: { type: String, required: true },
    totalViews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const GigView = mongoose.model("GigView", gigViewSchema);
export default GigView;
