import { Router } from "express";
import { loginUser, registerUser } from "../controllers/UserController.js";
const router = Router();

// Define your routes and middleware
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
