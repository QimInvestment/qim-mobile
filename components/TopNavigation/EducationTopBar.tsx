import React, { useEffect, useRef } from "react";
import { ScrollView, Pressable, SafeAreaView, View } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Animated from "react-native-reanimated";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const EducationTopBar = ({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const scrollRef = useRef<ScrollView>(null!);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
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
              navigation.navigate(route.name);

              // Top tab bar scroll handler
              index >= 2
                ? scrollRef.current.scrollToEnd({
                    animated: true,
                  })
                : scrollRef.current.scrollTo({
                    x: 0,
                    animated: true,
                  });
            }
          };

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{
                marginHorizontal: 5,
                padding: 5,
                borderBottomWidth: isFocused ? 3 : 0,
                borderBlockColor: "#FFA500",
              }}
              key={index}
            >
              <Animated.Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: isFocused ? "MontserratBold" : "Montserrat",
                  color: theme.color,
                }}
              >
                {label as string}
              </Animated.Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EducationTopBar;
