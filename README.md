
Step 1. Basic Step.................
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

step 1.a what is Cors...... connected to fronted to backend
cors() — (Green Pass / Security Permission)
Yeh kya hai? Browser ke ek security rule (Same-Origin Policy) ko bypass karne ka middleware hai.

Kyun use karte hain? Browser ka niyam hai ki agar aapka frontend localhost:3000 (React) par chal raha hai, toh woh bina permission localhost:8000 (Node.js) se data nahi le sakta kyunki dono ka address alag hai.

Interview Point: Server mein cors() lagane se server browser ko ek authorization header bhejta hai: "Yeh React app apni hi hai, iska request block mat karo."

Step 2. install npm package socket.io.............
definition:- Socket.io ek popular JavaScript library hai jo web browser aur server ke beech real-time, bi-directional (dono taraf se), aur event-based communication allow karti hai.

Step 3. Setup of Socket io........
1. create a manager.js file
import { Server, Socket } from "socket.io";

const initServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ User Connected to Separate File: ${socket.id}`);

    socket.on("join-call", (roomId, userId) => {
      socket.join(roomId);
      console.log(`👤 User ${userId} joined room ${roomId}`);
    });

    socket.on("disconnect", () => {
      console.log(`❌ User Disconnected: ${socket.id}`);
    });
  });
  return io;
};

export default initServer;

2. setup app.js......................................
1. http.createServer(app) — (Super Server)
Yeh kya hai? Express application (app) ko Node.js ke default HTTP server ke andar pack (wrap) karta hai.

Kyun use karte hain? Express akela sirf normal HTTP Requests (jaise API routes /get, /post) handle kar sakta hai. Lekin Socket.io ko chalne ke liye ek live, continuous connection chahiye hota hai.

Interview Point: http.createServer(app) karne se ek aisa single server banta hai jo ek hi port par Express ke routes aur Socket.io ke real-time connections dono ko sath mein sambhal sakta hai.

import http from "http";
import initServer from "./controllers/socketManager.js";


const server = http.createServer(app);
initServer(server);

server.listen(PORT, () => {
  // Correct spelling is "listening"
  console.log(`Server is listening on port ${PORT}`);
});

// STEP 2 FRONTEND CREATE REACT AND INSTALL SOCKET.IO-CLIENT

socket.io-client kya hai? Yeh ek specialized package hai jo humare React frontend ko backend ke Socket.io server se aapas mein sync/connect hone ki capability deta hai.

autoConnect: false kyun lagaya? By default, jaise hi website open hoti hai, socket backend se connect ho jata hai. Zoom Clone mein hum chahte hain ki socket tabhi active ho jab banda actually kisi room unique ID ko create kare ya text box mein room ID daal kar "Join Call" button par click kare. Isse humare server par faltu ka load nahi padta.