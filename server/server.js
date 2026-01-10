import app from "./app.js";
import http from "http";
import { Server } from "socket.io";
import { initSocket } from "./socket/socket.js";

const PORT = process.env.PORT || 2000;
const server = http.createServer(app);

// const io = new Server(server, {
//   cors: { origin: "*" }, // frontend URL দিতে পারো production এ
// });

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});


initSocket(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
