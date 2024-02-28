import React from "react";
import { SetStateAction, useState } from "react";
import { View, TextInput, Text, ViewStyle, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomText from "./CustomText";

type PinVerificationPaneProp = {
  containerStyle?: ViewStyle;
  pin: string;
  setPin: React.Dispatch<SetStateAction<string>>;
};

const PinVerificationPane = ({
  containerStyle,
  pin,
  setPin,
}: PinVerificationPaneProp) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <View style={[{ position: "relative" }, containerStyle]}>
      <TextInput
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: 0,
        }}
        maxLength={5}
        onChangeText={setPin}
        autoFocus={true}
        keyboardType="numeric"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <View
              key={item}
              style={[
                styles.pinBox,
                { backgroundColor: theme.pinBackgroundColor },
              ]}
            >
              <View
                style={[styles.textBox, { borderBottomColor: theme.color }]}
              >
                <CustomText
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: theme.color,
                  }}
                  allowFontScaling={false}
                >
                  {pin[item] ? pin[item] : ""}
                </CustomText>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PinVerificationPane;

const styles = StyleSheet.create({
  pinBox: {
    height: 60,
    width: 60,
    borderRadius: 8.63,
    padding: 10,
  },
  textBox: {
    width: "100%",
    height: "100%",
    borderBottomWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
});
