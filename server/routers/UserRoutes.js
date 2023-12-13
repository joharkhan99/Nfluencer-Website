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
  fetchAllUsers,
  deleteUser,
  fetchAllGigs,
  deleteGig,
  getAdminStats,
  fetchAllDisputes,
} from "../controllers/UserController.js";
import authenticate from "../middleware/authenticate.js";
const router = Router();

// Define your routes and middleware
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verifyemail", verifyEmail);
router.post("/userdetails", userDetails);

router.delete("/admin-delete-user", deleteUser);
router.delete("/admin-delete-gig", deleteGig);

router.get("/admin-users", fetchAllUsers);
router.get("/admin-users", fetchAllUsers);
router.get("/getAdminStats", getAdminStats);
router.get("/admin-gigs", fetchAllGigs);
router.get("/admin-disputes", fetchAllDisputes);

router.use(authenticate);
router.post("/getuser", getUser);
router.post("/wallet", storeWallet);
router.delete("/wallet", removeWallet);
router.post("/chatUsers", getUsers);

export default router;
