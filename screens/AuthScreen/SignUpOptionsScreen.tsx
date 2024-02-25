import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";
// import { signInAuthStatus } from "../redux/features/authSlice";
import { RootState } from "../../redux/store";
import GradientText from "../../components/shared/GradientText";
import CustomButton from "../../components/shared/CustomButton";
import { toggleTheme } from "../../redux/features/themeSlice";
import ButtonWithIcon from "../../components/shared/ButtonWithIcon";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";
import GoogleLogoIcon from "../../assets/icons/shared/GoogleLogoIcon";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const SignUpOptionsScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const navigation = useUnAuthNavigation();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.imgContainer}>
        <Image source={require("../../assets/images/backgroundImg.png")} />
      </View>

      <View style={{ gap: 30 }}>
        <View style={styles.textContainer}>
          <GradientText style={styles.heading}>
            Sign up on {"\n"}QimInvest.
          </GradientText>
          <Text style={[styles.body, { color: theme.color }]}>
            Welcome, we are delighted to have you here.
          </Text>
        </View>

        <View style={styles.btnContainer}>
          {/* <Button
            title="Fake Login"
            onPress={() => dispatch(signInAuthStatus())}
          /> */}

          <ButtonWithIcon
            icon={<GoogleLogoIcon />}
            buttonText="Continue in Google"
            onPress={() => {
              // dispatch(toggleTheme());
              // navigation.navigate("SignUpOptionsScreen");
            }}
          />
          <ButtonWithIcon
            icon={<FontAwesome5 name="facebook" size={24} color="#316FF6" />}
            buttonText="Continue in Facebook"
            onPress={() => {}}
          />
          <ButtonWithIcon
            icon={<Octicons name="mail" size={24} color={theme.color} />}
            buttonText="Continue in Email"
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>

        <Pressable>
          <GradientText style={styles.guest}>Continue as a guest</GradientText>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    gap: 40,
  },
  imgContainer: {
    alignItems: "flex-end",
  },
  textContainer: {
    paddingHorizontal: 20,
    gap: 4,
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
  guest: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginTop: "10%",
  },
});
