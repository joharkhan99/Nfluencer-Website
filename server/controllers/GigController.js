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
  } = req.body;

  faqs = JSON.parse(faqs);
  requirements = JSON.parse(requirements);
  keywords = JSON.parse(keywords);
  packages = JSON.parse(packages);

  const user = await User.findOne({ username: username }).exec();

  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  const image = await handleUpload(dataURI);

  // console.log(image);
  // return;

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
    category: category.name,
    subcategory: subcategory.name,
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
    images: [image],
  });

  await newGig.save();
  res.status(201).json(newGig);
};

const fetchGig = async (req, res) => {
  const gig = await Gig.findById(req.params.gigId).exec();
  res.status(200).json(gig);
};

export { createGig, fetchGig };
