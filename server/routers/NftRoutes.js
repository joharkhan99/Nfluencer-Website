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
  getCollectionItemsCount,
  countViews,
  countCollectionViews,
  updateCollectionDetails,
  getAllCollections,
} from "../controllers/NftController.js";
import authenticate from "../middleware/authenticate.js";

const router = Router();

router.post("/getallnfts", getAllNFTs);
router.post("/details", nftDetails);
router.post("/getLikes", getAllNFTLikes);
router.get("/getNFTLikes/:id", getNFTLikes);
router.get("/getCollectionItemsCount", getCollectionItemsCount);
router.post("/countViews", countViews);
router.post("/countCollectionViews", countCollectionViews);
router.post("/getCollection", getCollection);
router.get("/getAllCollections", getAllCollections);

router.use(authenticate);

router.post("/user-nfts", fetchUserNFTs);
router.post("/", createNft);
router.post("/addCollection", addCollection);
router.post("/getCollections", getCollections);
router.post("/like", likeNFT);
router.delete("/like/:id", deleteLikeNFT);
router.post("/checkSaveItem", checkSaveItem);
router.delete("/saveItem/:id", deleteSavedItem);
router.post("/saveItem", saveItem);
router.put("/updateCollectionDetails/:collectionId", updateCollectionDetails);

export default router;
