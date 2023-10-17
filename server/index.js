import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routers/UserRoutes.js";
import chatRoutes from "./routers/ChatRoutes.js";
import messageRoutes from "./routers/MessageRoutes.js";
import gigRoutes from "./routers/GigRoutes.js";
import dotenv from "dotenv";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/user", upload.single("avatar"), userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/gig", gigRoutes);

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
