import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    totalItems: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const Collection = mongoose.model("Collection", collectionSchema);
export default Collection;