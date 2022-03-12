import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
  },
});
