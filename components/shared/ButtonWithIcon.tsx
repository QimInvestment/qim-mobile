import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/theme";
import MaskedView from "@react-native-masked-view/masked-view";
import CustomText from "./CustomText";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import React from "react";

type ButtonWithIconProps = {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  outlineStyle?: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
};

// EXAMPLE
{
  /* <ButtonWithIcon
    buttonText="Log In"
    type="button"
    containerStyle={{}}
    textStyle="text-primaryGreen"
/> */
}

const ButtonWithIcon = ({
  onPress,
  containerStyle,
  buttonText,
  textStyle,
  icon,
  rightIcon,
  disabled,
  outlineStyle,
}: ButtonWithIconProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonContainer, containerStyle && containerStyle]}
    >
      <MaskedView
        style={{ flexDirection: "row", height: "100%" }}
        maskElement={
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 3,
              borderStyle: "solid",
              borderRadius: 50,
            }}
          />
        }
      >
        <LinearGradient
          colors={["#AE7100", "#0C8B02"]}
          style={{ height: "100%", width: "100%" }}
        ></LinearGradient>
      </MaskedView>

      <View style={styles.virtualContainer}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <CustomText style={[{ color: theme.color, fontSize: 17 }, textStyle]}>
          {buttonText}
        </CustomText>
        {rightIcon && (
          <View style={styles.rightIconContainer}>{rightIcon}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 5,
  },
  virtualContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 5,
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
