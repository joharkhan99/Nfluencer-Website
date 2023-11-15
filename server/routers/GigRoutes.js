import { Router } from "express";
import {
  createGig,
  fetchGig,
  fetchUserGigs,
  deleteUserGigs,
  getAllGigs,
  gigDetails,
} from "../controllers/GigController.js";
import authenticate from "../middleware/authenticate.js";
const router = Router();

// Define your routes and middleware
router.get("/:gigId", fetchGig);
router.post("/getallgigs", getAllGigs);
router.post("/details", gigDetails);

router.use(authenticate);

router.post("/user-gigs", fetchUserGigs);
router.delete("/delete-gig", deleteUserGigs);
router.post("/", createGig);

export default router;
