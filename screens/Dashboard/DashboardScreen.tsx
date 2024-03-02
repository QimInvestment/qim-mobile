import React from "react";
import { View, Button, StatusBar } from "react-native";
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";
import CustomText from "../../components/shared/CustomText";
import { useDispatch } from "react-redux";
import { signOutAuthStatus } from "../../redux/features/authSlice";

const DashboardScreen = () => {
  const navigation = useMainAuthNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ gap: 10, paddingTop: StatusBar.currentHeight }}>
      <CustomText>Dashboard Screen</CustomText>

      <Button
        title="Another Screen"
        onPress={() => navigation.navigate("AnotherScreen")}
      />
      <Button title="Sign Out" onPress={() => dispatch(signOutAuthStatus())} />
    </View>
  );
};

export default DashboardScreen;
