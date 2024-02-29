import React, { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomInput from "../../components/shared/CustomInput";

import { Octicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";
import CustomButton from "../../components/shared/CustomButton";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";

const ResetPasswordScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useUnAuthNavigation();
  const [email, onChangeEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = (email: string) => {
    try {
      setIsLoading(true);

      // Verification of user's input
      const validEmail = email.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(validEmail);

      if (!isValidEmail) {
        setEmailError(!isValidEmail);
        throw Error();
      }

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("OtpVerificationScreen", {
          screen: "Reset",
        } as unknown as undefined);
      }, 3000);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.heading, { color: theme.color }]}>
          Enter Your Email Address.
        </Text>
        <Text style={[styles.body, { color: theme.color }]}>
          Kindly, enter your email address, we will send you an activation link
          to reset your log in details.
        </Text>
      </View>

      <View style={{ gap: 20, flex: 1, justifyContent: "space-between" }}>
        <CustomInput
          labelText="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          error={emailError ? "Please enter a valid email address." : ""}
          leftIcon={<Octicons name="mail" size={24} color={COLORS.iconColor} />}
        />

        <CustomButton
          buttonText={
            isLoading ? (
              <ActivityIndicator size="small" color={COLORS.iconColor} />
            ) : (
              "Proceed"
            )
          }
          onPress={() => handlePasswordReset(email)}
        />
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 100,
    gap: 50,
    justifyContent: "space-between",
  },
  textContainer: {
    gap: 8,
  },
  heading: {
    textAlign: "left",
    fontSize: 24,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  body: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});
