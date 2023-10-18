import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    royalties: { type: Number, required: true },
    traits: { type: Array, required: true },
    walletAddress: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const NFT = mongoose.model("NFT", nftSchema);
export default NFT;
