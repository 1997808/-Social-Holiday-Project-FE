import Axios from "axios";

export const MyAxios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost/ptit_traffic_api/api/",
});

export const MyToken = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
};