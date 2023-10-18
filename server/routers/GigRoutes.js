import { Router } from "express";
import { createGig, fetchGig } from "../controllers/GigController.js";
import multer from "multer";
const router = Router();

// Define your routes and middleware
router.post("/", createGig);
router.get("/:gigId", fetchGig);

export default router;
