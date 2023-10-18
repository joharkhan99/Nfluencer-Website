import Gig from "../models/Gig.js";
import Package from "../models/Package.js";
import User from "../models/User.js";
import cloudinary from "../utils/cloudinaryConfig.js";

const createGig = async (req, res) => {
  const { gig, username } = req.body;

  const user = await User.findOne({ username: username }).exec();

  let basicPackage = null;
  let standardPackage = null;
  let premiumPackage = null;

  if (req.files) {
    let multiplePicturePromise = req.files.map((picture) =>
      cloudinary.v2.uploader.upload(picture.path)
    );
    let imageResponses = await Promise.all(multiplePicturePromise);

    console.log(imageResponses);
  }

  const images = req.files.map((file) => file.path);
  console.log(images);

  if (gig.packages.basic) {
    basicPackage = new Package({
      name: gig.packages.basic.name,
      description: gig.packages.basic.description,
      price: gig.packages.basic.price,
      deliveryTime: gig.packages.basic.deliveryTime,
      revisions: gig.packages.basic.revisions,
      support: gig.packages.basic.support,
      extraDeliveryTime:
        gig.packages.extras.extraFastDelivery.basic.deliveryTime,
      extraDeliveryPrice: gig.packages.extras.extraFastDelivery.basic.price,
      extraRevisions: gig.packages.extras.extraRevision.basic.revisions,
      extraRevisionPrice: gig.packages.extras.extraRevision.basic.price,
    });

    await basicPackage.save();
  }

  if (gig.packages.standard) {
    standardPackage = new Package({
      name: gig.packages.standard.name,
      description: gig.packages.standard.description,
      price: gig.packages.standard.price,
      deliveryTime: gig.packages.standard.deliveryTime,
      revisions: gig.packages.standard.revisions,
      support: gig.packages.standard.support,
    });

    if (gig.packages.extras.extraFastDelivery.offer) {
      (standardPackage.extraDeliveryTime =
        gig.packages.extras.extraFastDelivery.standard.deliveryTime),
        (standardPackage.extraDeliveryPrice =
          gig.packages.extras.extraFastDelivery.standard.price),
        (standardPackage.extraRevisions =
          gig.packages.extras.extraRevision.standard.revisions),
        (standardPackage.extraRevisionPrice =
          gig.packages.extras.extraRevision.standard.price);
    }

    await standardPackage.save();
  }

  if (gig.packages.premium) {
    premiumPackage = new Package({
      name: gig.packages.premium.name,
      description: gig.packages.premium.description,
      price: gig.packages.premium.price,
      deliveryTime: gig.packages.premium.deliveryTime,
      revisions: gig.packages.premium.revisions,
      support: gig.packages.premium.support,
    });

    if (gig.packages.extras.extraFastDelivery.offer) {
      (premiumPackage.extraDeliveryTime =
        gig.packages.extras.extraFastDelivery.premium.deliveryTime),
        (premiumPackage.extraDeliveryPrice =
          gig.packages.extras.extraFastDelivery.premium.price),
        (premiumPackage.extraRevisions =
          gig.packages.extras.extraRevision.premium.revisions),
        (premiumPackage.extraRevisionPrice =
          gig.packages.extras.extraRevision.premium.price);
    }

    await premiumPackage.save();
  }

  const newGig = new Gig({
    title: gig.title,
    category: gig.category.name,
    subcategory: gig.subcategory.name,
    keywords: gig.keywords.join(","),
    user: user._id,
    description: gig.description,
    packages: {
      basic: basicPackage,
      standard: standardPackage,
      premium: premiumPackage,
    },
    images: gig.images,
    requirements: gig.requirements,
    faqs: gig.faqs,
  });

  await newGig.save();
  res.status(201).json(newGig);
};

const fetchGig = async (req, res) => {
  const gig = await Gig.findById(req.params.gigId).exec();
  res.status(200).json(gig);
};

export { createGig, fetchGig };
