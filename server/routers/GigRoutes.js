import { Router } from "express";
import { createGig, fetchGig } from "../controllers/GigController.js";
import multer from "multer";
const router = Router();

const storage2 = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload2 = multer({ storage2 });

// Define your routes and middleware
router.post("/", upload2.array("images", 4), createGig);
router.get("/:gigId", fetchGig);

export default router;
