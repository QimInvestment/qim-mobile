import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import CustomInput from "../../components/shared/CustomInput";
import CustomButton from "../../components/shared/CustomButton";

import { COLORS } from "../../constants/theme";
import UserAuthService from "../../service/Welcome/UserAuthServices";

const ResetPasswordScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { email, onChangeEmail, emailError, isLoading, handlePasswordReset } =
    UserAuthService();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
    </KeyboardAvoidingView>
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
  },
  textContainer: {
    gap: 8,
  },
  heading: {
    textAlign: "left",
    fontSize: 24,
    fontFamily: "MontserratBold",
  },
  body: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});
