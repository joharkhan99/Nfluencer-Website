import Collection from "../models/Collection.js";
import Gig from "../models/Gig.js";
import NFT from "../models/Nft.js";
import Package from "../models/Package.js";
import User from "../models/User.js";
import cloudinary from "../utils/cloudinaryConfig.js";

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "nfluencer-gigs",
  });
  return res.url;
}

const createNft = async (req, res) => {
  try {
    const {
      name,
      description,
      file,
      price,
      currency,
      royalties,
      traits,
      collection,
      from,
      to,
      tokenId,
      creator,
      transactionHash,
      gasUsed,
      effectiveGasPrice,
      blockHash,
      nftUrl,
      walletAddress,
    } = req.body;

    // Create a new NFT instance
    const newNFT = new NFT({
      name,
      description,
      file,
      price,
      currency,
      royalties,
      traits,
      collectionData: collection,
      from,
      to,
      tokenId,
      creator,
      transactionHash,
      gasUsed,
      effectiveGasPrice,
      blockHash,
      nftUrl,
      walletAddress,
    });

    const savedNFT = await newNFT.save();
    await Collection.findByIdAndUpdate(collection, { $inc: { totalItems: 1 } });

    res.status(201).json(savedNFT);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error: true });
  }
};

const fetchUserNFTs = async (req, res) => {
  const nfts = await NFT.find({ user: req.body.userId })
    .populate("user", "-password")
    .sort({ createdAt: -1 })
    .exec();
  res.status(200).json(nfts);
};

const getAllNFTs = async (req, res) => {
  const nfts = await NFT.find({})
    .populate("user", "-password")
    .sort({ createdAt: -1 })
    .exec();
  res.status(200).json(nfts);
};

const nftDetails = async (req, res) => {
  const { nftId } = req.body;
  const nft = await NFT.find({
    _id: nftId,
  })
    .populate("user", "-password")
    .exec();
  res.status(200).json(nft);
};

const addCollection = async (req, res) => {
  const { name, image, userId } = req.body;

  if (!name || !image) {
    return res
      .status(400)
      .json({ error: true, message: "Name and image are required." });
  }

  try {
    const newCollection = new Collection({ name, image, user: userId });
    await newCollection.save();

    const collections = await Collection.find({
      user: userId,
    }).exec();
    return res.status(200).json({
      error: false,
      message: "Collection added successfully.",
      collections,
    });
  } catch (error) {
    console.error("Error adding collection:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

const getCollections = async (req, res) => {
  const { userId } = req.body;
  // console.log(userId);

  try {
    const collections = await Collection.find({
      user: userId,
    }).exec();

    return res.status(200).json({
      error: false,
      message: "Collections fetched successfully.",
      collections,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

export {
  createNft,
  fetchUserNFTs,
  getAllNFTs,
  nftDetails,
  addCollection,
  getCollections,
};
