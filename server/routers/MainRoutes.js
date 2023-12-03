import express from "express";
import multer from "multer";
import userRoutes from "../routers/UserRoutes.js";
import chatRoutes from "../routers/ChatRoutes.js";
import messageRoutes from "../routers/MessageRoutes.js";
import gigRoutes from "../routers/GigRoutes.js";
import nftRoutes from "../routers/NftRoutes.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.use("/user", upload.single("avatar"), userRoutes);
router.use("/chat", chatRoutes);
router.use("/message", messageRoutes);
// router.use("/gig", upload.single("images"), gigRoutes);
router.use("/gig", gigRoutes);
router.use("/nft", nftRoutes);

export default router;
