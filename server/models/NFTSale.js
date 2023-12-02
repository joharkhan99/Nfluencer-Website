import mongoose from "mongoose";

const nftSalesSchema = new mongoose.Schema(
  {
    nftId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    seller: {
      type: String,
    },
    buyer: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NFTSale = mongoose.model("NFTSale", nftSalesSchema);
export default NFTSale;
