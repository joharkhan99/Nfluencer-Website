import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
  userDetails,
  getUser,
  storeWallet,
  removeWallet,
  getUsers,
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
router.post("/users", getUsers);

export default router;
