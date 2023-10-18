import mongoose from "mongoose";

const gigSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    keywords: {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: {
      type: String,
    },
    packages: {
      basic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
      standard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
      premium: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    },
    images: {
      type: Array,
    },
    requirements: {
      type: Array,
    },
    faqs: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Gig = mongoose.model("Gig", gigSchema);
export default Gig;
