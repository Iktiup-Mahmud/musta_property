import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // backend URL
export default socket;


// utils/socket.js
// import { io } from "socket.io-client";

// let socket;

// export const getSocket = (userId) => {
//   if (!socket) {
//     socket = io("http://localhost:5000", {
//       auth: { userId },
//     });
//   }
//   return socket;
// };


// import { io } from "socket.io-client";

// const user = JSON.parse(localStorage.getItem("user"));

// const socket = io("http://localhost:5000", {
//   auth: {
//     userId: user?._id,
//     role: user?.role
//   }
// });

// export default socket;
