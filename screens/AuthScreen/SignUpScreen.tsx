import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GradientText from "../../components/shared/GradientText";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomInput from "../../components/shared/CustomInput";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import CustomButton from "../../components/shared/CustomButton";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";
import GoogleLogoIcon from "../../assets/icons/shared/GoogleLogoIcon";

const SignUpScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useUnAuthNavigation();
  const [fullName, onChangeFullName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (
    acceptTerms: any,
    fullName: any,
    email: any,
    password: any
  ) => {
    try {
      if (!acceptTerms) {
        return Alert.alert("Kindly accept Terms & Conditions!");
      }
      setIsLoading(true);

      // Verification of user's input
      const validFullName = fullName.trim();
      const validEmail = email.trim();
      const validPassword = password.trimStart().trimEnd();

      // Simple email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(validEmail);
      const isValidFullName = validFullName.length >= 3;
      const isValidPassword = validPassword.length >= 8;
      setNameError(!isValidFullName);
      setEmailError(!isValidEmail);
      setPasswordError(!isValidPassword);

      if (nameError || emailError || passwordError) {
        return;
      }

      setTimeout(() => {
        setIsLoading(false);
        Alert.alert(`${validFullName}, ${validEmail}, ${validPassword}`);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const goToLoginScreen = () => navigation.navigate("LoginScreen");

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backGroundColor }]}
    >
      <View style={styles.textContainer}>
        <GradientText style={styles.heading}>
          Sign up on {"\n"}QimInvest.
        </GradientText>
        <Text style={[styles.body, { color: theme.color }]}>
          Welcome, we are delighted to have you here.
        </Text>
      </View>

      <View>
        <CustomInput
          labelText="Full Name"
          placeholder="Enter Name"
          value={fullName}
          onChangeText={onChangeFullName}
          error={
            nameError
              ? "Please enter your name, a minimum of 3 characters."
              : ""
          }
          leftIcon={
            <Ionicons
              name="person-outline"
              size={24}
              color={COLORS.iconColor}
            />
          }
        />
        <CustomInput
          labelText="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          error={emailError ? "Please enter a valid email address." : ""}
          leftIcon={<Octicons name="mail" size={24} color={COLORS.iconColor} />}
        />
        <CustomInput
          labelText="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={!showPassword ? true : false}
          error={
            passwordError ? "Password must be a minimum of 8 characters." : ""
          }
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

        <View style={styles.terms}>
          <MaterialIcons
            name={!acceptTerms ? "check-box-outline-blank" : "check-box"}
            size={24}
            color={acceptTerms ? "#10D101" : "#f03e0c"}
            onPress={() => setAcceptTerms((prev) => !prev)}
          />
          <View style={styles.termsTextContainer}>
            <Text style={[styles.termsText, { color: theme.color }]}>
              I have read and I accept the
            </Text>
            <GradientText style={styles.termsGradient}>
              privacy policy
            </GradientText>
            <Text style={[styles.termsText, { color: theme.color }]}>and</Text>
            <GradientText style={styles.termsGradient}>
              terms of service
            </GradientText>
            <Text style={[styles.termsText, { color: theme.color }]}>
              of Qiminvest.
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", gap: 8 }}>
          <CustomButton
            buttonText={
              isLoading ? (
                <ActivityIndicator size="small" color={COLORS.iconColor} />
              ) : (
                "Sign Up"
              )
            }
            onPress={() => handleSignUp(acceptTerms, fullName, email, password)}
          />
          <View style={styles.termsTextContainer}>
            <Text style={[styles.termsText, { color: theme.color }]}>
              Already have an account with us?
            </Text>
            <Pressable onPress={goToLoginScreen}>
              <GradientText style={styles.termsGradient}>Login</GradientText>
            </Pressable>
          </View>
        </View>

        <View style={styles.alternativeContainer}>
          <View style={styles.alternativeHeadingContainer}>
            <View style={styles.alternativeLines} />
            <Text style={[styles.alternativeText, { color: theme.color }]}>
              Or continue with
            </Text>
            <View style={styles.alternativeLines} />
          </View>

          <View style={styles.alternativeIconContainer}>
            <Pressable style={styles.icon} onPress={() => {}}>
              <GoogleLogoIcon />
            </Pressable>
            <Pressable style={styles.icon} onPress={() => {}}>
              <FontAwesome5 name="facebook" size={20} color="#316FF6" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    gap: 20,
  },
  textContainer: {
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
  terms: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
    marginBottom: 15,
  },
  termsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 5,
  },
  termsText: {
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  termsGradient: {
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  alternativeContainer: {
    marginTop: 20,
    alignItems: "center",
    gap: 20,
  },
  alternativeHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  alternativeLines: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.borderColor,
  },
  alternativeText: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  alternativeIconContainer: {
    flexDirection: "row",
    gap: 30,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
