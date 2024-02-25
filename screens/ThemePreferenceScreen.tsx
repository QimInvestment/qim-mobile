import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GradientText from "../components/shared/GradientText";
import { toggleTheme } from "../redux/features/themeSlice";
import useUnAuthNavigation from "../hooks/useUnAuthNavigation";
import ButtonWithIcon from "../components/shared/ButtonWithIcon";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ThemePreferenceScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const navigation = useUnAuthNavigation();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.imgContainer}>
        <Image source={require("../assets/images/backgroundImg.png")} />
      </View>

      <View style={styles.textContainer}>
        <GradientText style={styles.heading}>
          Choose a {"\n"}Preferred Theme.
        </GradientText>
        <Text style={[styles.body, { color: theme.color }]}>
          We care about your eyes and comfort, we have made both the light theme
          and the dark theme available to ensure you have a seamless experience.
          You can switch theme anytime you like from settings&gt;change themes.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <ButtonWithIcon
          icon={<Entypo name="light-up" size={24} color="black" />}
          buttonText="Continue in Light Mode"
          onPress={() => navigation.navigate("SignUpOptionsScreen")}
        />
        <ButtonWithIcon
          icon={<Ionicons name="moon-outline" size={24} color="white" />}
          buttonText="Continue in Dark Mode"
          onPress={() => {
            dispatch(toggleTheme());
            navigation.navigate("SignUpOptionsScreen");
          }}
          containerStyle={{
            backgroundColor: "black",
            borderRadius: 50,
          }}
          textStyle={{ color: "white" }}
        />
      </View>
    </View>
  );
};

export default ThemePreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    gap: 40,
  },
  imgContainer: {
    alignItems: "flex-end",
    marginBottom: 40,
  },
  textContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  heading: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  body: {
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  btnContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
});
