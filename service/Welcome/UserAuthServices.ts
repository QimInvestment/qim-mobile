import { useState } from "react";
import { Alert } from "react-native";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";

const UserAuthService = () => {
  const navigation = useUnAuthNavigation();
  const [fullName, onChangeFullName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, onChangeNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleLogin = (
    email: string,
    password: string,
    acceptTerms?: boolean
  ) => {
    try {
      setIsLoading(true);

      // Verification of user's input
      const validEmail = email.trim().toLowerCase();
      const validPassword = password.trimStart().trimEnd();

      // Simple email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(validEmail);
      const isValidPassword = validPassword.length >= 8;

      if (!isValidEmail || !isValidPassword) {
        setEmailError(!isValidEmail);
        setPasswordError(!isValidPassword);
        throw Error();
      }

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("OtpVerificationScreen", {
          screen: "Login",
        } as unknown as undefined);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleSignUp = (
    acceptTerms: boolean,
    fullName: string,
    email: string,
    password: string
  ) => {
    try {
      if (!acceptTerms) {
        return Alert.alert("Kindly accept Terms & Conditions!");
      }
      setIsLoading(true);

      // Verification of user's input
      const validFullName = fullName.trim();
      const validEmail = email.trim().toLowerCase();
      const validPassword = password.trimStart().trimEnd();

      // Simple email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(validEmail);
      const isValidFullName = validFullName.length >= 3;
      const isValidPassword = validPassword.length >= 8;

      if (!isValidEmail || !isValidFullName || !isValidPassword) {
        setNameError(!isValidFullName);
        setEmailError(!isValidEmail);
        setPasswordError(!isValidPassword);
        throw Error();
      }

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("OtpVerificationScreen", {
          screen: "SignUp",
        } as unknown as undefined);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = (email: string) => {
    try {
      setIsLoading(true);

      // Verification of user's input
      const validEmail = email.trim().toLowerCase();
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
      }, 2000);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleNewPassword = (
    password: string,
    newPassword: string,
    handleModal: () => void
  ) => {
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
        // setIsCompModalOpen(true);
        handleModal();
      }, 2000);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const goToLoginScreen = () => navigation.navigate("LoginScreen");

  const goToSignUpScreen = () => navigation.navigate("SignUpScreen");

  const goToResetPasswordScreen = () =>
    navigation.navigate("ResetPasswordScreen");

  return {
    newPassword,
    onChangeNewPassword,
    showNewPassword,
    setShowNewPassword,
    fullName,
    onChangeFullName,
    nameError,
    setNameError,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    showPassword,
    setShowPassword,
    acceptTerms,
    setAcceptTerms,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    isLoading,
    setIsLoading,
    handleLogin,
    handleSignUp,
    handlePasswordReset,
    handleNewPassword,
    goToSignUpScreen,
    goToResetPasswordScreen,
    goToLoginScreen,
    navigation,
  };
};

export default UserAuthService;
