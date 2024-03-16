import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// components
import BlogScreen from "./blog/BlogScreen";
import EducationScreen from "./education/EducationScreen";
import CustomTopBar from "../../components/TopNavigation/CustomTopBar";

const Tab = createMaterialTopTabNavigator();

const ExploreScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.backGroundColor }}>
      <Tab.Navigator tabBar={(props) => <CustomTopBar {...props} />}>
        <Tab.Screen
          name="BlogTab"
          component={BlogScreen}
          options={{ tabBarLabel: "Articles/Blog" }}
        />

        <Tab.Screen
          name="EducationTab"
          component={EducationScreen}
          options={{ tabBarLabel: "Learn about stocks" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ExploreScreen;
