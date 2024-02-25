import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { COLORSType } from "../../types/theme";
import { createTheme } from "../../constants/theme";

type initialStateType = {
  presentTheme: string;
  theme: COLORSType;
};

const initialState: initialStateType = {
  presentTheme: "lightTheme",
  theme: createTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.presentTheme === "lightTheme"
          ? createTheme("darkTheme")
          : createTheme("lightTheme");
      state.presentTheme =
        state.presentTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
