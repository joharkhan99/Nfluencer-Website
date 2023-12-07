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
  createPaymentIntent,
  createOrder,
  fetchOrderDetails,
  submitRequirements,
  getOrderActivity,
  uploadDeliveryZiptoCloudinary,
  submitDelivery,
  submitReview,
  getUserOrdersAsSeller,
  getUserOrdersAsBuyer,
  countViews,
  getUserGigsViews,
  getGigReviews,
} from "../controllers/GigController.js";
import multer from "multer";
import authenticate from "../middleware/authenticate.js";
const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define your routes and middleware
router.get("/:gigId", fetchGig);
router.post("/countViews", countViews);

router.post("/getallgigs", getAllGigs);
router.post("/details", gigDetails);
router.get("/getGigReviews/:gigId", getGigReviews);

router.post("/create-payment-intent", createPaymentIntent);
router.use(authenticate);

router.post("/getUserGigsViews", getUserGigsViews);
router.post("/orderdetails", fetchOrderDetails);
router.post("/getUserOrdersAsSeller", getUserOrdersAsSeller);
router.post("/getUserOrdersAsBuyer", getUserOrdersAsBuyer);
router.post("/getOrderActivity", getOrderActivity);
router.post("/createOrder", createOrder);
router.post("/submitRequirements", submitRequirements);
router.post("/user-gigs", fetchUserGigs);
router.delete("/delete-gig", deleteUserGigs);

router.post("/", createGig);
router.post("/submitDelivery", submitDelivery);
router.post("/submitReview", submitReview);

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

router.post(
  "/uploadDeliveryZiptoCloudinary",
  upload.single("file"),
  uploadDeliveryZiptoCloudinary
);

// router.use("/uploadImagetoCloudinary", upload.single("images"), gigRoutes);

export default router;
