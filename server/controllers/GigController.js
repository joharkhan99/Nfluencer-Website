import Gig from "../models/Gig.js";
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

const uploadImagetoCloudinary = async (req, res) => {
  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  // const image = await handleUpload(dataURI);

  const response = await cloudinary.uploader.upload(dataURI, {
    resource_type: "auto",
    folder: "nfluencer-gigs",
  });

  res.status(200).json({ response });
};

const uploadVideoToCloudinary = async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader
      .upload_stream(
        {
          resource_type: "video",
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading video to Cloudinary:", error);
            res.status(500).json({ error: "Failed to upload video" });
          } else {
            console.log("Video uploaded to Cloudinary:", result);
            res.status(200).json({ result });
          }
        }
      )
      .end(req.file.buffer);
  } catch (error) {
    console.error("Error processing video upload:", error);
    res.status(500).json({ error: "Failed to process video upload" });
  }
};

const createGig = async (req, res) => {
  var {
    title,
    keywords,
    category,
    subcategory,
    description,
    packages,
    requirements,
    faqs,
    username,
    offer3Packages,
    images,
    video,
    hasVideo,
    offerReward,
    rewardNFT,
  } = req.body;

  try {
    // faqs = JSON.parse(faqs);
    // requirements = JSON.parse(requirements);
    // keywords = JSON.parse(keywords);
    // packages = JSON.parse(packages);
    // images = JSON.parse(images);

    const user = await User.findOne({ username: username }).exec();

    let basicPackage = null;
    let standardPackage = null;
    let premiumPackage = null;

    if (packages.basic) {
      basicPackage = new Package({
        name: packages.basic.name,
        description: packages.basic.description,
        price: packages.basic.price,
        deliveryTime: packages.basic.deliveryTime,
        revisions: packages.basic.revisions,
        support: packages.basic.support,
        extraDeliveryTime: packages.extras.extraFastDelivery.basic.deliveryTime,
        extraDeliveryPrice: packages.extras.extraFastDelivery.basic.price,
        extraRevisions: packages.extras.extraRevision.basic.revisions,
        extraRevisionPrice: packages.extras.extraRevision.basic.price,
      });

      await basicPackage.save();
    }

    if (packages.standard) {
      standardPackage = new Package({
        name: packages.standard.name,
        description: packages.standard.description,
        price: packages.standard.price,
        deliveryTime: packages.standard.deliveryTime,
        revisions: packages.standard.revisions,
        support: packages.standard.support,
      });

      if (packages.extras.extraFastDelivery.offer) {
        (standardPackage.extraDeliveryTime =
          packages.extras.extraFastDelivery.standard.deliveryTime),
          (standardPackage.extraDeliveryPrice =
            packages.extras.extraFastDelivery.standard.price),
          (standardPackage.extraRevisions =
            packages.extras.extraRevision.standard.revisions),
          (standardPackage.extraRevisionPrice =
            packages.extras.extraRevision.standard.price);
      }

      await standardPackage.save();
    }

    if (packages.premium) {
      premiumPackage = new Package({
        name: packages.premium.name,
        description: packages.premium.description,
        price: packages.premium.price,
        deliveryTime: packages.premium.deliveryTime,
        revisions: packages.premium.revisions,
        support: packages.premium.support,
      });

      if (packages.extras.extraFastDelivery.offer) {
        (premiumPackage.extraDeliveryTime =
          packages.extras.extraFastDelivery.premium.deliveryTime),
          (premiumPackage.extraDeliveryPrice =
            packages.extras.extraFastDelivery.premium.price),
          (premiumPackage.extraRevisions =
            packages.extras.extraRevision.premium.revisions),
          (premiumPackage.extraRevisionPrice =
            packages.extras.extraRevision.premium.price);
      }

      await premiumPackage.save();
    }

    const newGig = new Gig({
      title: title,
      category: category,
      subcategory: subcategory,
      keywords: keywords,
      user: user._id,
      description: description,
      packages: {
        basic: basicPackage,
        standard: standardPackage,
        premium: premiumPackage,
      },
      requirements: requirements,
      faqs: faqs,
      images: images,
      video: video,
      hasVideo: hasVideo,
      offer3Packages: offer3Packages,
      offerReward: offerReward,
      rewardNFT: rewardNFT,
    });

    await newGig.save();

    if (newGig) {
      res.status(201).json(newGig);
    } else {
      res.status(500).json({ error: true, message: "Error creating gig" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

const fetchUserGigs = async (req, res) => {
  const gigs = await Gig.find({ user: req.body.userId }).exec();
  res.status(200).json(gigs);
};

const getAllGigs = async (req, res) => {
  const gigs = await Gig.find({})
    .populate("user", "-password")
    .populate("packages.basic packages.standard packages.premium")
    .exec();
  res.status(200).json(gigs);
};

// getAllGigs();

const gigDetails = async (req, res) => {
  const { gigId } = req.body;
  const gig = await Gig.find({
    _id: gigId,
  })
    .populate("user", "-password")
    .populate("packages.basic packages.standard packages.premium")
    .exec();
  res.status(200).json(gig);
};

const fetchGig = async (req, res) => {
  const gig = await Gig.findById(req.params.gigId)
    .populate("user", "-password")
    .exec();
  res.status(200).json(gig);
};

const deleteUserGigs = async (req, res) => {
  const { gigId, userId } = req.body;
  try {
    const gig = await Gig.findById(gigId).exec();
    if (gig.user.toString() === userId.toString()) {
      await Gig.findByIdAndDelete(gigId).exec();
      res.status(200).json({ error: false, message: "Gig has been deleted" });
    } else {
      res.status(403).json({ error: true, message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

export {
  createGig,
  fetchGig,
  fetchUserGigs,
  deleteUserGigs,
  getAllGigs,
  gigDetails,
  uploadImagetoCloudinary,
  uploadVideoToCloudinary,
};
