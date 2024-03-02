import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";
import Animated, { ZoomInDown, ZoomInUp } from "react-native-reanimated";

const WelcomeLogoScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useUnAuthNavigation();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.navigate("WelcomeMessageScreen");
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <Animated.View
        entering={ZoomInUp.delay(300)
          .duration(2000)
          .withInitialValues({
            transform: [{ translateY: -400 }, { scale: 3 }],
          })}
      >
        <Image source={require("../../assets/images/logo.png")} />
      </Animated.View>

      <Animated.View
        entering={ZoomInDown.delay(300)
          .duration(2000)
          .withInitialValues({
            transform: [{ translateY: 400 }, { scale: 2 }],
          })}
      >
        <Image source={require("../../assets/images/qiminvest.png")} />
      </Animated.View>
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
