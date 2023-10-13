import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routers/UserRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

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
