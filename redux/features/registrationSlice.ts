import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType={
  stepIndex: number,
  userName: string
}

const initialState: initialStateType ={
  stepIndex: 0,
  userName: ""
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers:{
    changeStep:(state, action: PayloadAction<number>)=>{
      state.stepIndex = action.payload
    }
  }
})

export const {changeStep} = registrationSlice.actions

export default registrationSlice.reducer;