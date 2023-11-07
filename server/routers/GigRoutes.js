import { Router } from "express";
import {
  createGig,
  fetchGig,
  fetchUserGigs,
  deleteUserGigs,
  getAllGigs,
  gigDetails,
} from "../controllers/GigController.js";
const router = Router();

// Define your routes and middleware
router.post("/", createGig);
router.get("/:gigId", fetchGig);
router.post("/user-gigs", fetchUserGigs);
router.delete("/delete-gig", deleteUserGigs);

router.post("/getallgigs", getAllGigs);
router.post("/details", gigDetails);

export default router;
