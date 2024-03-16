import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// components
import GradientText from "../shared/GradientText";
import { Ionicons } from "@expo/vector-icons";

// type
import { EducationTopicCardProp } from "../../types/education-screen";

// hook
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";

const EducationTopicCard = ({ data }: EducationTopicCardProp) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useMainAuthNavigation();

  return (
    <Pressable
      //   onPress={() => navigation.navigate('Blog')}
      style={[
        styles.container,
        { backgroundColor: theme.BottomNavBackgroundColor },
      ]}
    >
      <Text
        style={{
          color: theme.color,
          fontFamily: "Montserrat",
          fontSize: 18,
        }}
      >
        {data?.title}
      </Text>

      <GradientText style={{}}>
        <Ionicons name="chevron-forward-outline" size={25} />
      </GradientText>
    </Pressable>
  );
};

export default EducationTopicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    borderRadius: 10,

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
