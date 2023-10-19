import { Router } from "express";
import { createNft, fetchUserNFTs } from "../controllers/NftController.js";

const router = Router();

router.post("/", createNft);
router.post("/user-nfts", fetchUserNFTs);

export default router;
