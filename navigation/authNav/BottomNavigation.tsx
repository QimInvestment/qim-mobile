import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import CustomBottomTabBar from "../../components/BottomNavigation/CustomBottomTabBar";

// assets
import { MaterialCommunityIcons } from "@expo/vector-icons";

// screens
import DashboardScreen from "../../screens/Dashboard/DashboardScreen";

import { BottomTabsParamList } from "../../types/auth-stack";
import DashboardHeader from "../../components/BottomNavigation/Dashboardheader";

const Tab = createBottomTabNavigator<BottomTabsParamList>();
type NavProp = BottomTabNavigationProp<BottomTabsParamList>;

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      // tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeBottomTab"
        component={DashboardScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-automation"
                size={size}
                color={color}
              />
            );
          },
          headerShown: true,
          header: () => <DashboardHeader />,
        }}
      />
      <Tab.Screen
        name="InvestBottomTab"
        component={DashboardScreen}
        options={{
          title: "Invest",
          tabBarLabelPosition: "beside-icon",
          tabBarStyle: {
            backgroundColor: "green",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-automation"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
