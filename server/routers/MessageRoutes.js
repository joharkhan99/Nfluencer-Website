import { Router } from "express";
import { allMessages, sendMessage } from "../controllers/MessageController.js";
const router = Router();

// Define your routes and middleware
router.route("/:chatId").get(allMessages);
router.route("/").post(sendMessage);

export default router;
