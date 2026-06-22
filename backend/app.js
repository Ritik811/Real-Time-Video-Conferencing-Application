import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Clean default import

// Smoothly initialize your environment variables
dotenv.config();

const app = express();

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

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // Correct spelling is "listening"
  console.log(`Server is listening on port ${PORT}`);
});
