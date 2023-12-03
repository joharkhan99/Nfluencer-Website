import { Router } from "express";
import {
  createGig,
  fetchGig,
  fetchUserGigs,
  deleteUserGigs,
  getAllGigs,
  gigDetails,
  uploadImagetoCloudinary,
  uploadVideoToCloudinary,
} from "../controllers/GigController.js";
import multer from "multer";
import authenticate from "../middleware/authenticate.js";
const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define your routes and middleware
router.get("/:gigId", fetchGig);
router.post("/getallgigs", getAllGigs);
router.post("/details", gigDetails);

router.use(authenticate);

router.post("/user-gigs", fetchUserGigs);
router.delete("/delete-gig", deleteUserGigs);
router.post("/", createGig);
router.post(
  "/uploadImagetoCloudinary",
  upload.single("images"),
  uploadImagetoCloudinary
);

router.post(
  "/uploadVideoToCloudinary",
  upload.single("video"),
  uploadVideoToCloudinary
);

// router.use("/uploadImagetoCloudinary", upload.single("images"), gigRoutes);

export default router;
