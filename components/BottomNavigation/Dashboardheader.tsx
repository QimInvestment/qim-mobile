import React from "react";
import { View } from "react-native";

// asseets
import { Octicons } from "@expo/vector-icons";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomText from "../shared/CustomText";

const DashboardHeader = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <CustomText
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: theme.color,
          marginRight: 8,
        }}
      >
        Hello {"John Doe"}
      </CustomText>
      <Octicons name="bell-fill" size={24} color="white" />
    </View>
  );
};

export default DashboardHeader;
