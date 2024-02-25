import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import WelcomeScreen from "../../screens/WelcomeScreen";
import ThemePreferenceScreen from "../../screens/ThemePreferenceScreen";
import WelcomeLogoScreen from "../../screens/Welcome/WelcomeLogoScreen";
import WelcomeMessageScreen from "../../screens/Welcome/WelcomeMessageScreen";
import SignUpOptionsScreen from "../../screens/AuthScreen/SignUpOptionsScreen";

// type
import type { UnAuthStackParamList } from "../../types/un-auth-stack";
import SignUpScreen from "../../screens/AuthScreen/SignUpScreen";
import LoginScreen from "../../screens/AuthScreen/LoginScreen";
const Stack = createNativeStackNavigator<UnAuthStackParamList>();

// const Stack = createNativeStackNavigator();

const UnAuthStack = () => {
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
    </Stack.Navigator>
  );

  // return (
  //   <Stack.Navigator
  //     screenOptions={{
  //       headerLeft: () => (
  //         <TouchableOpacity
  //           onPress={() => navigation.goBack()}
  //         ></TouchableOpacity>
  //       ),
  //       headerStyle: { backgroundColor: "black" },
  //     }}
  //   >
  //     <Stack.Screen
  //       name="WelcomeScreen"
  //       component={WelcomeScreen}
  //       options={{
  //         headerShown: false,
  //       }}
  //     />
  //     <Stack.Screen
  //       name="ThemePreferenceScreen"
  //       component={ThemePreferenceScreen}
  //       options={{
  //         headerShown: false,
  //       }}
  //     />
  //   </Stack.Navigator>
  // );
};

export default UnAuthStack;
