import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routers/UserRoutes.js";
import chatRoutes from "./routers/ChatRoutes.js";
import messageRoutes from "./routers/MessageRoutes.js";
import gigRoutes from "./routers/GigRoutes.js";
import nftRoutes from "./routers/NftRoutes.js";
import dotenv from "dotenv";
import multer from "multer";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/user", upload.single("avatar"), userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/gig", upload.single("images"), gigRoutes);
app.use("/api/nft", upload.single("image"), nftRoutes);

// Start the server, Connect to MongoDB
const port = process.env.PORT || 8080;
mongoose
  .connect("mongodb://0.0.0.0:27017/nfluencer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.error("MongoDB connection error:", error));
