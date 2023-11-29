import mongoose from "mongoose";

const nftLikesSchema = new mongoose.Schema(
  {
    nftId: {
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

const LikeNFT = mongoose.model("NFTLike", nftLikesSchema);
export default LikeNFT;
