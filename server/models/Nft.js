import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    file: { type: String, required: true },
    price: { type: String, required: true },
    currency: { type: String, required: true }, // Add currency field
    royalties: { type: Number, required: true },
    traits: { type: Array, required: true },
    collectionData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    }, // Add collection field
    from: { type: String, required: true },
    to: { type: String, required: true },
    tokenId: { type: String, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    transactionHash: { type: String, required: true },
    gasUsed: { type: String, required: true },
    effectiveGasPrice: { type: String, required: true },
    blockHash: { type: String, required: true },
    nftUrl: { type: String, required: true },
    walletAddress: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const NFT = mongoose.model("NFT", nftSchema);
export default NFT;
