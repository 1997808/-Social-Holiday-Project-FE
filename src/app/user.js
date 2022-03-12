import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
    },
    resetUser: (state) => {
      state.id = null;
      state.name = null;
      state.username = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
