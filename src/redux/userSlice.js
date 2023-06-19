import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    SET_TOKEN(state, action) {
      return { ...state, token: action.payload };
    },
    LOGOUT() {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { SET_TOKEN, LOGOUT } = actions;
export default reducer;
