import React from "react";
import { FlatList, View } from "react-native";

// component
import EducationTopicCard from "../../../components/explore/EducationTopicCard";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// beginner_data
import { BEGINNER_DATA } from "../../../data/beginnerData";

const BeginnerScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backGroundColor,
        paddingVertical: 15,
      }}
    >
      <FlatList
        data={BEGINNER_DATA}
        renderItem={({ item }) => <EducationTopicCard data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 15,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BeginnerScreen;
