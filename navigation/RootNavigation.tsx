import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

// redux
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

// stacks
import UnAuthStack from "./unAuthNav/UnAuthStack";
import AuthStack from "./authNav/AuthStack";

const RootNavigation = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const presentTheme = useSelector(
    (state: RootState) => state.theme.presentTheme
  );

  return (
    <NavigationContainer>
      <StatusBar style={presentTheme === "lightTheme" ? "dark" : "light"} />
      {!isAuthenticated ? <UnAuthStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
