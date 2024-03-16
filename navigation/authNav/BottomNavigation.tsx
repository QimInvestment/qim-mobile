import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomBottomTabBar from "../../components/BottomNavigation/CustomBottomTabBar";

// assets
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// screens
import DashboardScreen from "../../screens/Dashboard/DashboardScreen";
import ExploreScreen from "../../screens/Explore/ExploreScreen";

import { BottomTabsParamList } from "../../types/auth-stack";

import DashboardHeader from "../../components/BottomNavigation/Dashboardheader";

import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomNavigation = () => {
  const navigation = useMainAuthNavigation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.BottomNavBackgroundColor,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="HomeBottomTab"
        component={DashboardScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
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
          tabBarIcon: ({ color, size }) => {
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

      <Tab.Screen
        name="ExploreBottomTab"
        component={ExploreScreen}
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="explore" size={size} color={color} />;
          },
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: theme.color,
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
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
