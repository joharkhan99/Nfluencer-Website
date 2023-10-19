import { Router } from "express";
import {
  createNft,
  fetchUserNFTs,
  getAllNFTs,
  nftDetails,
} from "../controllers/NftController.js";

const router = Router();

router.post("/", createNft);
router.post("/user-nfts", fetchUserNFTs);
router.post("/getallnfts", getAllNFTs);
router.post("/details", nftDetails);

export default router;
