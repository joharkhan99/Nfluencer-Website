import { Router } from "express";
import {
  createNft,
  fetchUserNFTs,
  getAllNFTs,
  nftDetails,
  addCollection,
  getCollections,
  getCollection,
  likeNFT,
  getAllNFTLikes,
  deleteLikeNFT,
  getNFTLikes,
  checkSaveItem,
  deleteSavedItem,
  saveItem,
} from "../controllers/NftController.js";
import authenticate from "../middleware/authenticate.js";

const router = Router();

router.post("/getallnfts", getAllNFTs);
router.post("/details", nftDetails);
router.post("/getLikes", getAllNFTLikes);
router.get("/getNFTLikes/:id", getNFTLikes);

router.use(authenticate);

router.post("/user-nfts", fetchUserNFTs);
router.post("/", createNft);
router.post("/addCollection", addCollection);
router.post("/getCollections", getCollections);
router.post("/getCollection", getCollection);
router.post("/like", likeNFT);
router.delete("/like/:id", deleteLikeNFT);
router.post("/checkSaveItem", checkSaveItem);
router.delete("/saveItem/:id", deleteSavedItem);
router.post("/saveItem", saveItem);

export default router;
