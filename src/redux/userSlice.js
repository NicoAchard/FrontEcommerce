import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    SET_USER(state, action) {
      return action.payload;
    },
    LOGOUT() {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { SET_USER, LOGOUT } = actions;
export default reducer;
