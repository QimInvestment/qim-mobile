import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Text } from "react-native";

type GradientText = {
  style: object;
  children: ReactNode;
};

const GradientText = ({ children, style }: GradientText) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#af7717", "#10D101"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 0, y: 1 }}
      >
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
