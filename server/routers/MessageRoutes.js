import { Router } from "express";
import {
  allMessages,
  chatHistory,
  sendMessage,
  fetchChatId,
} from "../controllers/MessageController.js";
const router = Router();

// Define your routes and middleware
router.route("/:chatId").get(allMessages);
router.route("/").post(sendMessage);
router.post("/chat-history", chatHistory);
router.post("/fetch-chat-id", fetchChatId);

export default router;
