import Axios from "axios";

const accessToken = localStorage.getItem("token");

export const MyAxios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
