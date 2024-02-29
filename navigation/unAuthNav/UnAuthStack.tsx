import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import ThemePreferenceScreen from "../../screens/ThemePreferenceScreen";
import WelcomeLogoScreen from "../../screens/Welcome/WelcomeLogoScreen";
import WelcomeMessageScreen from "../../screens/Welcome/WelcomeMessageScreen";
import SignUpOptionsScreen from "../../screens/AuthScreen/SignUpOptionsScreen";
import SignUpScreen from "../../screens/AuthScreen/SignUpScreen";
import LoginScreen from "../../screens/AuthScreen/LoginScreen";
import OtpVerificationScreen from "../../screens/AuthScreen/OtpVerificationScreen";
import ResetPasswordScreen from "../../screens/AuthScreen/ResetPasswordScreen";
import NewPasswordScreen from "../../screens/AuthScreen/NewPasswordScreen";

// type
import type { UnAuthStackParamList } from "../../types/un-auth-stack";

import { Ionicons } from "@expo/vector-icons";
import useUnAuthNavigation from "../../hooks/useUnAuthNavigation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Stack = createNativeStackNavigator<UnAuthStackParamList>();

const UnAuthStack = () => {
  const navigation = useUnAuthNavigation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeLogoScreen" component={WelcomeLogoScreen} />
      <Stack.Screen
        name="WelcomeMessageScreen"
        component={WelcomeMessageScreen}
      />
      <Stack.Screen
        name="ThemePreferenceScreen"
        component={ThemePreferenceScreen}
      />
      <Stack.Screen
        name="SignUpOptionsScreen"
        component={SignUpOptionsScreen}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: theme.backGroundColor as string },
          headerLeft: () => (
            <Ionicons
              style={{
                padding: 5,
                backgroundColor: theme.backGroundColor,
                borderRadius: 20,
              }}
              name="chevron-back-outline"
              size={24}
              color={theme.color}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: theme.backGroundColor as string },
          headerLeft: () => (
            <Ionicons
              style={{
                padding: 5,
                backgroundColor: theme.backGroundColor,
                borderRadius: 20,
              }}
              name="chevron-back-outline"
              size={24}
              color={theme.color}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="OtpVerificationScreen"
        component={OtpVerificationScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: theme.backGroundColor as string },
          headerLeft: () => (
            <Ionicons
              style={{
                padding: 5,
                backgroundColor: theme.backGroundColor,
                borderRadius: 20,
              }}
              name="chevron-back-outline"
              size={24}
              color={theme.color}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
