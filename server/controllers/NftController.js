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
  var { name, description, price, royalties, traits, walletAddress, username } =
    req.body;

  try {
    traits = JSON.parse(traits);

    const user = await User.findOne({ username: username }).exec();

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const image = await handleUpload(dataURI);

    const newNFT = new NFT({
      name,
      description,
      price,
      royalties,
      traits,
      walletAddress,
      image,
      user: user._id,
    });

    await newNFT.save();

    if (newNFT) {
      res.status(201).json(newNFT);
    } else {
      res.status(500).json({ error: true, message: "Error creating NFT" });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

export { createNft };
