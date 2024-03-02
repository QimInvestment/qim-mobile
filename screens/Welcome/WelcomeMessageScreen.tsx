import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import GradientText from "../../components/shared/GradientText";

import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";

import Animated, { ZoomInDown, ZoomInUp } from "react-native-reanimated";

const WelcomeMessageScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useUnAuthNavigation();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <Animated.View
        entering={ZoomInUp.duration(2000).withInitialValues({
          transform: [{ translateY: -120 }, { scale: 0 }],
        })}
      >
        <Image source={require("../../assets/images/mobile.png")} />
      </Animated.View>

      <Animated.View
        entering={ZoomInDown.duration(2000).withInitialValues({
          transform: [{ translateY: 150 }, { scale: 0 }],
        })}
        style={styles.textContainer}
      >
        <GradientText style={styles.heading}>
          Dive into the World of Seamless{"\n"} Trading with QimInvest
        </GradientText>

        <Text style={[styles.body, { color: theme.color }]}>
          Seamlessly execute trades with our user-friendly platform, backed by
          real-time market data and intuitive tools. Stay informed with
          personalized insights, educational resources, and expert analysis.
        </Text>
      </Animated.View>

      <Pressable
        onPress={() => navigation.navigate("ThemePreferenceScreen")}
        style={styles.btn}
      >
        <Image
          style={styles.img}
          source={require("../../assets/images/nextBtn.png")}
        />
      </Pressable>
    </View>
  );
};

export default WelcomeMessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 20,
    position: "relative",
  },
  textContainer: {
    alignItems: "center",
    gap: 14,
  },
  heading: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "MontserratBold",
  },
  body: {
    textAlign: "center",
    fontSize: 13.2,
    fontFamily: "Montserrat",
  },
  btn: {
    position: "absolute",
    bottom: 30,
    right: 10,
    marginRight: 20,
  },
  img: {
    resizeMode: "cover",
    width: 100,
    height: 30,
  },
});
