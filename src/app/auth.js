import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
    },
    logOut: (state) => {
      // localStorage.removeItem("token");
      state.user = false;
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;