import { Router } from "express";
import {
  createGig,
  fetchGig,
  fetchUserGigs,
  deleteUserGigs,
} from "../controllers/GigController.js";
import multer from "multer";
const router = Router();

// Define your routes and middleware
router.post("/", createGig);
router.get("/:gigId", fetchGig);
router.post("/user-gigs", fetchUserGigs);
router.delete("/delete-gig", deleteUserGigs);

export default router;
