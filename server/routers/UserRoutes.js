import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
  userDetails,
  getUser,
  storeWallet,
  removeWallet,
} from "../controllers/UserController.js";
const router = Router();

// Define your routes and middleware
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verifyemail", verifyEmail);
router.post("/userdetails", userDetails);
router.post("/getuser", getUser);
router.post("/wallet", storeWallet);
router.delete("/wallet", removeWallet);

export default router;
