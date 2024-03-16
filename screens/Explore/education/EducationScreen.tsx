import React from "react";
import { View } from "react-native";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import EducationCard from "../../../components/explore/EducationCard";
import { EDUCATION_DATA } from "../../../data/educationData";

const EducationScreen = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View
      style={{
        backgroundColor: theme.backGroundColor,
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 30,
        gap: 20,
      }}
    >
      {EDUCATION_DATA.map((data, index) => (
        <EducationCard data={data} index={index} key={data.id} />
      ))}
    </View>
  );
};

export default EducationScreen;
