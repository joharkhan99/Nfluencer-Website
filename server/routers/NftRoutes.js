import { Router } from "express";
import {
  createNft,
  fetchUserNFTs,
  getAllNFTs,
  nftDetails,
  addCollection,
  getCollections,
} from "../controllers/NftController.js";
import authenticate from "../middleware/authenticate.js";

const router = Router();

router.post("/getallnfts", getAllNFTs);
router.post("/details", nftDetails);

router.use(authenticate);

router.post("/user-nfts", fetchUserNFTs);
router.post("/", createNft);
router.post("/addCollection", addCollection);
router.post("/getCollections", getCollections);

export default router;
