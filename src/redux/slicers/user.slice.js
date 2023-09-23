import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      state.userList.unshift(action.payload);
      // state.userList = [action.payload, ...state.userList];
    },
    updateUser: (state, action) => {
      const { id, values } = action.payload;
      const index = state.userList.findIndex((item) => item.id === id);
      const newUser = {
        id: id,
        ...values,
      };
      state.userList.splice(index, 1, newUser);
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
