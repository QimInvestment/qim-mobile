import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import GradientText from "../../components/shared/GradientText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomInput from "../../components/shared/CustomInput";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import CustomButton from "../../components/shared/CustomButton";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";
import CompletionModal from "../../components/shared/CompletionModal";
import WelcomeScreenService from "../../service/Welcome/WelcomeScreenService";
import { signInAuthStatus } from "../../redux/features/authSlice";

const NewPasswordScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const [password, onChangePassword] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isCompModalOpen, setIsCompModalOpen } = WelcomeScreenService();

  const handlePasswordReset = (password: string, newPassword: string) => {
    try {
      setIsLoading(true);

      // Verification of user's input
      const validPassword = password.trimStart().trimEnd();
      const validNewPassword = newPassword.trimStart().trimEnd();

      const checkPassword = validPassword !== validNewPassword;

      if (checkPassword || validPassword.length < 8) {
        setPasswordError(true);
        throw Error();
      }

      setTimeout(() => {
        setIsLoading(false);
        setIsCompModalOpen(true);
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
        <GradientText style={styles.heading}>Reset {"\n"}Password</GradientText>
        <Text style={[styles.body, { color: theme.color }]}>
          Enter your new password of choice. The password should be strong and
          be something you can easily remember.
        </Text>
      </View>

      <View style={{ gap: 20, flex: 1 }}>
        <CustomInput
          labelText="Enter new password"
          placeholder="Enter your password"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={!showPassword ? true : false}
          //   error={
          //     passwordError ? "Password must be a minimum of 8 characters." : ""
          //   }
          leftIcon={
            <MaterialIcons
              name="lock-outline"
              size={24}
              color={COLORS.iconColor}
            />
          }
          rightIcon={
            <Feather
              name={!showPassword ? "eye" : "eye-off"}
              size={24}
              color={COLORS.iconColor}
              onPress={() => setShowPassword((prev) => !prev)}
            />
          }
        />
        <CustomInput
          labelText="Re-enter password"
          placeholder="Enter your password"
          value={newPassword}
          onChangeText={onChangeNewPassword}
          secureTextEntry={!showNewPassword ? true : false}
          //   error={
          //     passwordError ? "Password must be a minimum of 8 characters." : ""
          //   }
          leftIcon={
            <MaterialIcons
              name="lock-outline"
              size={24}
              color={COLORS.iconColor}
            />
          }
          rightIcon={
            <Feather
              name={!showNewPassword ? "eye" : "eye-off"}
              size={24}
              color={COLORS.iconColor}
              onPress={() => setShowNewPassword((prev) => !prev)}
            />
          }
        />

        {passwordError && (
          <Text style={{ color: "red", fontSize: 18 }}>
            Password does not match or length is less than 8 characters!
          </Text>
        )}

        <View style={{ marginTop: "auto" }}>
          <CustomButton
            buttonText={
              isLoading ? (
                <ActivityIndicator size="small" color={COLORS.iconColor} />
              ) : (
                "Proceed"
              )
            }
            onPress={() => handlePasswordReset(password, newPassword)}
          />
        </View>
      </View>

      <CompletionModal
        isCompModalOpen={isCompModalOpen}
        headingText="Success!"
        subHeadingText="You have successfully reset your password."
        completionText="Continue"
        completionAction={() => {
          setIsCompModalOpen(false);
          dispatch(signInAuthStatus());
        }}
      />
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    gap: 50,
    justifyContent: "space-between",
  },
  textContainer: {
    gap: 8,
  },
  heading: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  body: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Montserrat",
  },
});
