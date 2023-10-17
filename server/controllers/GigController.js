import Gig from "../models/Gig.js";
import User from "../models/User.js";

const createGig = async (req, res) => {
  if (req.body.gigdatatype === "overview") {
    const { title, category, subcategory, keywords } = req.body;

    if (req.body.gigId) {
      const gig = await Gig.findById(req.body.gigId).exec();
      gig.title = title;
      gig.category = category;
      gig.subcategory = subcategory;
      gig.keywords = keywords;
      try {
        await gig.save();
        res.status(201).json(gig);
      } catch (error) {
        res.status(500).json({ error: true, message: "Gig update failed" });
      }
      return;
    }

    const user = await User.findOne({ username: req.body.username }).exec();
    try {
      const gig = await Gig.create({
        title,
        category,
        subcategory,
        keywords,
        user,
      });
      res.status(201).json(gig);
    } catch (error) {
      res.status(500).json({ error: true, message: "Gig creation failed" });
    }
  }
};

const fetchGig = async (req, res) => {
  const gig = await Gig.findById(req.params.gigId).exec();
  res.status(200).json(gig);
};

export { createGig, fetchGig };
