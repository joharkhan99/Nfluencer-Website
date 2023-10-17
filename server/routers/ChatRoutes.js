import { Router } from "express";
import { accessChat, fetchChats } from "../controllers/ChatController.js";
const router = Router();

// Define your routes and middleware
router.route("/").post(accessChat);
router.route("/").get(fetchChats);

export default router;
