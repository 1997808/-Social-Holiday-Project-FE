import Axios from "axios";

const accessToken = localStorage.getItem("token");

export const MyAxios = Axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_IP + ':' + process.env.REACT_APP_PORT,
  // baseURL: "http://localhost:3000/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
