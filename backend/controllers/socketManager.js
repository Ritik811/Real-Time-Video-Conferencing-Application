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
