import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  isAuthenticated: boolean;
};

const initialState: initialStateType = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInAuthStatus: (state) => {
      state.isAuthenticated = true;
    },
    signOutAuthStatus: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { signInAuthStatus, signOutAuthStatus } = authSlice.actions;

export default authSlice.reducer;
