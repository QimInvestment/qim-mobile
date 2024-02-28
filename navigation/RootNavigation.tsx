import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

// redux
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

// stacks
import UnAuthStack from "./unAuthNav/UnAuthStack";
// import AuthStack from "./authNav/AuthStack";
import { Button, Text, View } from "react-native";
import { signOutAuthStatus } from "../redux/features/authSlice";

const RootNavigation = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* {!isAuthenticated ? <UnAuthStack /> : <AuthStack />} */}
      {!isAuthenticated ? (
        <UnAuthStack />
      ) : (
        <View>
          <Text>Authenticated</Text>
          <Text>Authenticated</Text>
          <Text>Authenticated</Text>
          <Text>Authenticated</Text>
          <Text>Authenticated</Text>
          <Button
            title="Sign Out"
            onPress={() => dispatch(signOutAuthStatus())}
          />
        </View>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
