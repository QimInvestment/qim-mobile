import { createSlice } from "@reduxjs/toolkit";
import type { ThemeType } from "../../types/theme";
import { createTheme } from "../../constants/theme";

type initialStateType = {
  presentTheme: string;
  theme: ThemeType;
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
    lightTheme: (state) => {
      state.theme = createTheme("lightTheme");
      state.presentTheme = "lightTheme";
    },
    darkTheme: (state) => {
      state.theme = createTheme("darkTheme");
      state.presentTheme = "darkTheme";
    },
  },
});

export const { toggleTheme, lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;
