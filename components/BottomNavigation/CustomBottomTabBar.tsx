import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

// assets
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomText from "../shared/CustomText";

const CustomBottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.BottomNavBackgroundColor,
        height: 90,
        paddingTop: 10,
        paddingBottom: 20,
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

        const icon = options.tabBarIcon ? (
          options.tabBarIcon({
            focused: isFocused,
            color: isFocused ? "#fff" : (theme.BottomNavLabelColor as string),
            size: 22,
          })
        ) : (
          <MaterialIcons
            name="lock-outline"
            size={22}
            color={isFocused ? "#fff" : theme.BottomNavLabelColor}
          />
        );

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
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
            key={index}
          >
            <LinearGradient
              colors={
                isFocused
                  ? ["#FFA500", "#0C8B02"]
                  : ["transparent", "transparent"]
              }
              style={{ borderRadius: 12 }}
            >
              <View
                style={{
                  height: isFocused ? 40 : "auto",
                  flexDirection: isFocused ? "row" : "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 8,
                  borderRadius: 12,
                }}
              >
                {icon as ReactNode}
                <CustomText
                  style={{
                    color: isFocused ? "#fff" : theme.color,
                    marginTop: 3,
                    marginLeft: isFocused ? 5 : 0,
                    fontFamily: "Montserrat",
                    fontSize: 16,
                  }}
                >
                  {label as string}
                </CustomText>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;
