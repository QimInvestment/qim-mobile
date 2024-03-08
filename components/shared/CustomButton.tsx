import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import CustomText from "./CustomText";

type CustomButtonProps = {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonText: string | ReactNode;
  textStyle?: StyleProp<TextStyle>;
  outlineStyle?: string;
  disabled?: boolean;
};

// EXAMPLE
{
  /* <CustomButton
    buttonText="Log In"
    type="button"
    containerStyle={{}}
    textStyle="text-primaryGreen"
/> */
}

const CustomButton = ({
  onPress,
  containerStyle,
  buttonText,
  textStyle,
  disabled,
  outlineStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={["#0C8B02", "#45BB3B", "#10D101"]}
        // start={{ x: 0.1, y: 0.7 }}
        style={[styles.buttonContainer, containerStyle && containerStyle]}
      >
        <View style={styles.virtualContainer}>
          <CustomText
            style={[
              { color: "#fff", fontWeight: "bold", fontSize: 17 },
              textStyle,
            ]}
          >
            {buttonText}
          </CustomText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 50,
  },
  virtualContainer: {
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: "rgba(252,252,252,0.5)",
    borderBottomColor: "rgba(107, 106, 106,0.5)",
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    left: 20,
    height: 28,
    width: 28,
    overflow: "hidden",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconContainer: {
    height: 28,
    width: 28,
    overflow: "hidden",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
