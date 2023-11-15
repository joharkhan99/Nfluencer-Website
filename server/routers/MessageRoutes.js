import { Router } from "express";
import {
  allMessages,
  chatHistory,
  sendMessage,
  fetchChatId,
} from "../controllers/MessageController.js";
import authenticate from "../middleware/authenticate.js";
const router = Router();

router.use(authenticate);
router.route("/:chatId").get(allMessages);
router.route("/").post(sendMessage);
router.post("/chat-history", chatHistory);
router.post("/fetch-chat-id", fetchChatId);

export default router;
