import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// components
import GradientText from "../shared/GradientText";
import { Ionicons } from "@expo/vector-icons";

// type
import { EducationCardProp } from "../../types/education-screen";

// hook
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";

const EducationCard = ({ data, index }: EducationCardProp) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useMainAuthNavigation();
  const screenName = ["GlossaryTab", "BeginnerTab", "AdvancedTab", "ProTab"];

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("EducationTopicScreen", {
          screen: screenName[index],
        } as unknown as undefined);
      }}
      style={[
        styles.container,
        { backgroundColor: theme.BottomNavBackgroundColor },
      ]}
    >
      <View style={{ gap: 4 }}>
        <Text
          style={{
            color: theme.color,
            fontFamily: "MontserratBold",
            fontSize: 18,
          }}
        >
          {data?.title}
        </Text>
        <Text
          style={{
            color: theme.color,
            fontFamily: "Montserrat",
            fontSize: 12,
          }}
        >
          {data?.body}
        </Text>
      </View>

      <GradientText style={{}}>
        <Ionicons name="chevron-forward-outline" size={30} />
      </GradientText>
    </Pressable>
  );
};

export default EducationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,

    // shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
