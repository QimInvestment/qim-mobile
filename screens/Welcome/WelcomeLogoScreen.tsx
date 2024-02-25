import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";

const WelcomeLogoScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useUnAuthNavigation();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.navigate("WelcomeMessageScreen");
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <Image source={require("../../assets/images/logo.png")} />
      <Image source={require("../../assets/images/qiminvest.png")} />
    </View>
  );
};

export default WelcomeLogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
