import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// type
import {
  AuthStackParamList,
  BottomTabsParamList,
} from "../../types/auth-stack";

// components
import BottomNavigation from "./BottomNavigation";
import AnotherScreen from "../../screens/AnotherScreen";
import Blog from "../../screens/Explore/blog/Blog";
import EducationTopicLists from "../../screens/Explore/education/EducationTopicLists";
import { Ionicons } from "@expo/vector-icons";

// hook
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabsParamList>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={BottomNavigation}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AnotherScreen"
        component={AnotherScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EducationTopicScreen"
        component={EducationTopicLists}
        options={{
          title: "Learn about stocks.",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: theme.color as string,
            fontFamily: "MontserratBold",
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: theme.backGroundColor as string,
          },
          headerLeft: () => (
            <Ionicons
              style={{
                padding: 5,
                marginLeft: 15,
                backgroundColor: theme.pinBackgroundColor,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              name="chevron-back-outline"
              size={28}
              color={theme.color}
              onPress={() => navigation.navigate("ExploreBottomTab")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Education"
        component={Blog}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
