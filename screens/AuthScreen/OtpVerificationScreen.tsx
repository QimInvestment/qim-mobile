import React from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { signInAuthStatus } from "../../redux/features/authSlice";

import GradientText from "../../components/shared/GradientText";
import CustomButton from "../../components/shared/CustomButton";
import PinVerificationPane from "../../components/shared/PinVerificationPane";
import CompletionModal from "../../components/shared/CompletionModal";

import WelcomeScreenService from "../../service/Welcome/WelcomeScreenService";
import { COLORS } from "../../constants/theme";
import UserAuthService from "../../service/Welcome/UserAuthServices";

// type RouteProp =;

const OtpVerificationScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const route = useRoute();
  const { screen } = route?.params as { screen: string };

  const { isLoading, setIsLoading, navigation } = UserAuthService();

  const { pin, setPin, isCompModalOpen, setIsCompModalOpen } =
    WelcomeScreenService();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.textContainer}>
        <GradientText style={styles.heading}>
          Confirm your {"\n"}Email Address
        </GradientText>

        <Text style={[styles.body, { color: theme.color }]}>
          We sent a one time password (OTP) to your email, this is a security
          measure. Kindly input them on the input below;
        </Text>
      </View>

      <View style={{ gap: 40, flex: 1 }}>
        <View>
          <PinVerificationPane pin={pin} setPin={setPin} />
          <CompletionModal
            isCompModalOpen={isCompModalOpen}
            headingText="Congratulation"
            subHeadingText={`${
              screen === "Login"
                ? "You have successfully logged in to QinInvest"
                : "You have successfully signed up on QimInvest"
            }, your one stop to ensure a seamless trading experience.`}
            completionText="Continue"
            completionAction={() => {
              setIsCompModalOpen(false);
              dispatch(signInAuthStatus());
            }}
          />
        </View>

        <View style={{ alignItems: "center", gap: 15, marginTop: 10 }}>
          <CustomButton
            buttonText={
              isLoading ? (
                <ActivityIndicator size="small" color={COLORS.iconColor} />
              ) : (
                "Confirm"
              )
            }
            onPress={() => {
              if (pin.length === 5) {
                screen === "Reset"
                  ? navigation.navigate("NewPasswordScreen")
                  : setIsCompModalOpen(true);
              } else {
                Alert.alert("Kindly input OTP!");
              }
            }}
          />
          <View style={styles.termsTextContainer}>
            <Text style={[styles.termsText, { color: theme.color }]}>
              Code expires in:
            </Text>
            <Text style={{ color: "red" }}>00: 00: 00</Text>
          </View>
          <View style={styles.termsTextContainer}>
            <Text style={[styles.termsText, { color: theme.color }]}>
              Didn't get the code?
            </Text>
            <Pressable onPress={() => {}}>
              <GradientText style={styles.termsGradient}>
                Resend OTP
              </GradientText>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    gap: 50,
    justifyContent: "space-between",
  },
  textContainer: {
    gap: 4,
  },
  heading: {
    textAlign: "left",
    fontSize: 30,
    fontFamily: "MontserratBold",
  },
  body: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
  },
  termsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  termsText: {
    fontSize: 12,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  termsGradient: {
    fontSize: 12,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});
