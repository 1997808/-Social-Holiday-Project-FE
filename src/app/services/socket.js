import { createContext } from "react";
import { io } from "socket.io-client";

const accessToken = localStorage.getItem("token");

export const socket = io(process.env.REACT_APP_SOCKET_URL, {
  auth: {
    token: `Bearer ${accessToken}`
  }
});
export const SocketContext = createContext();