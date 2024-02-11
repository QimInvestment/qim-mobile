import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType={
    isAuthenticated:boolean,
}

const initialState : initialStateType={
    isAuthenticated: false,
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    updateAuthStatus:(state)=>{
        state.isAuthenticated = true;
    }
  }
})

export const { updateAuthStatus} = authSlice.actions;

export default authSlice.reducer;