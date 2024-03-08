import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import GradientText from "../../components/shared/GradientText";
import CustomInput from "../../components/shared/CustomInput";
import CustomButton from "../../components/shared/CustomButton";
import CompletionModal from "../../components/shared/CompletionModal";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { signInAuthStatus } from "../../redux/features/authSlice";

import { COLORS } from "../../constants/theme";
import WelcomeScreenService from "../../service/Welcome/WelcomeScreenService";
import UserAuthService from "../../service/Welcome/UserAuthServices";

const NewPasswordScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const {
    password,
    onChangePassword,
    newPassword,
    onChangeNewPassword,
    showPassword,
    setShowPassword,
    showNewPassword,
    setShowNewPassword,
    passwordError,
    isLoading,
    handleNewPassword,
  } = UserAuthService();

  const { isCompModalOpen, setIsCompModalOpen } = WelcomeScreenService();

  const handleModal = () => setIsCompModalOpen(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.textContainer}>
        <GradientText style={styles.heading}>Reset {"\n"}Password</GradientText>
        <Text style={[styles.body, { color: theme.color }]}>
          Enter your new password of choice. The password should be strong and
          be something you can easily remember.
        </Text>
      </View>

      <View style={{ gap: 10 }}>
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
            onPress={() =>
              handleNewPassword(password, newPassword, handleModal)
            }
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
    </KeyboardAvoidingView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 30,
  },
  textContainer: {
    gap: 8,
  },
  heading: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "MontserratBold",
  },
  body: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Montserrat",
  },
});
