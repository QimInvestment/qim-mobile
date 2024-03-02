import React from "react";
import { useCallback } from "react";
import RootNavigation from "./navigation/RootNavigation";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
