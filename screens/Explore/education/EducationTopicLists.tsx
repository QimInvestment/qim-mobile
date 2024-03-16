import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// components
import EducationTopBar from "../../../components/TopNavigation/EducationTopBar";
import GlossaryScreen from "./GlossaryScreen";
import BeginnerScreen from "./BeginnerScreen";
import AdvancedScreen from "./AdvancedScreen";
import ProScreen from "./ProScreen";

const Tab = createMaterialTopTabNavigator();

const EducationTopicLists = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View style={{ flex: 1, backgroundColor: theme.backGroundColor }}>
      <Tab.Navigator tabBar={(props) => <EducationTopBar {...props} />}>
        <Tab.Screen
          name="GlossaryTab"
          component={GlossaryScreen}
          options={{ tabBarLabel: "Glossary" }}
        />

        <Tab.Screen
          name="BeginnerTab"
          component={BeginnerScreen}
          options={{ tabBarLabel: "Beginner level" }}
        />

        <Tab.Screen
          name="AdvancedTab"
          component={AdvancedScreen}
          options={{ tabBarLabel: "Advanced level" }}
        />

        <Tab.Screen
          name="ProTab"
          component={ProScreen}
          options={{ tabBarLabel: "Pro level" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default EducationTopicLists;
