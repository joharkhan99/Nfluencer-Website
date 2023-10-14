import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
  userDetails,
  getUser,
} from "../controllers/UserController.js";
const router = Router();

// Define your routes and middleware
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verifyemail", verifyEmail);
router.post("/userdetails", userDetails);
router.post("/getuser", getUser);

export default router;
