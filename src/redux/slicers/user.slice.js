import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {},
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
