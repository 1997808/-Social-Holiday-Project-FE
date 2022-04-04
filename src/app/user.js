import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  username: null,
  profileImageId: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.profileImageId = action.payload.cloudinaryId;
    },
    resetUser: (state) => {
      state.id = null;
      state.name = null;
      state.username = null;
      state.profileImageId = null
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
