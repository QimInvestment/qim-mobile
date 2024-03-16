import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../shared/CustomText";

function CustomTopBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.BottomNavBackgroundColor,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 12,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 }}
            key={index}
          >
            <LinearGradient
              colors={
                isFocused
                  ? ["#FFA500", "#0C8B02"]
                  : ["transparent", "transparent"]
              }
              style={{
                borderRadius: 12,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 8,
              }}
            >
              <CustomText
                style={{
                  color: isFocused ? "#fff" : theme.color,
                  fontFamily: "Montserrat",
                  fontSize: 16,
                }}
              >
                {label as string}
              </CustomText>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTopBar;
