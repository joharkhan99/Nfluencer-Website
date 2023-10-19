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
import { Server } from "socket.io";
import http from "http";

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

// socket
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  // Listen for incoming messages
  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
  });
});
// socket

// Start the server, Connect to MongoDB
const port = process.env.PORT || 8080;
mongoose
  .connect("mongodb://0.0.0.0:27017/nfluencer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => server.listen(port, () => console.log(`Listening on port ${port}`))

    // app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.error("MongoDB connection error:", error));
