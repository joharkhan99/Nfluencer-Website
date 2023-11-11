import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import http from "http";
import mainRouter from "./routers/MainRoutes.js";
import setupSocket from "./utils/socketSetup.js";

const app = express();

// app config
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// router
app.use("/api", mainRouter);

// socket
const server = http.createServer(app);
setupSocket(server, process.env.CLIENT_URL);

// Start the server, Connect to MongoDB
const port = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch((error) => console.error("MongoDB connection error:", error.message));
