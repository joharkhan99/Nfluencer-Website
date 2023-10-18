import { Router } from "express";
import { createNft } from "../controllers/NftController.js";

const router = Router();

router.post("/", createNft);

export default router;
