import { Router } from "express";
import { accessChat, fetchChats } from "../controllers/ChatController.js";
import authenticate from "../middleware/authenticate.js";
const router = Router();

router.use(authenticate);
router.route("/").post(accessChat);
router.route("/").get(fetchChats);

export default router;
