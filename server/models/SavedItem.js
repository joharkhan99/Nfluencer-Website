import mongoose from "mongoose";

const savedItemSchema = new mongoose.Schema(
  {
    itemId: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SavedItem = mongoose.model("SavedItem", savedItemSchema);
export default SavedItem;
