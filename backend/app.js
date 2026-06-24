import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Clean default import
import cors from "cors";
import http from "http";
import initServer from "./controllers/socketManager.js";

// Smoothly initialize your environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;

// Professional connection function
const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};

// Calling the database function
connectDatabase();

app.get("/", (req, res) => {
  res.send("Working");
});

initServer(server);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  // Correct spelling is "listening"
  console.log(`Server is listening on port ${PORT}`);
});

