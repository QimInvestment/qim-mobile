import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/registrationSlice";
import authReducer from "./features/authSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
