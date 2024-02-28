import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import CompletionTick from "../../assets/icons/shared/CompletionTick";
import CustomButton from "./CustomButton";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CustomText from "./CustomText";

type CompletionModalProp = {
  isCompModalOpen: boolean;
  headingText: string;
  subHeadingText: string;
  completionText: string;
  completionAction: () => void;
};

const CompletionModal = ({
  headingText,
  subHeadingText,
  completionText,
  completionAction,
  isCompModalOpen,
}: CompletionModalProp) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Modal
      visible={isCompModalOpen}
      onRequestClose={() => null}
      transparent={true}
      animationType="slide"
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <View style={{ height: "45%" }} />

        <View
          style={[
            { backgroundColor: theme.pinBackgroundColor },
            styles.itemsContainer,
          ]}
        >
          <CompletionTick />
          <CustomText
            style={{
              color: theme.color,
              fontWeight: "900",
              fontSize: 30,
              marginBottom: 10,
              marginTop: 25,
            }}
          >
            {headingText}
          </CustomText>
          <CustomText
            style={{
              color: theme.completionSubTextColor,
              width: "80%",
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            {subHeadingText}
          </CustomText>
          <View style={{ flex: 1 }} />
          <CustomButton
            onPress={() => completionAction()}
            buttonText={completionText}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CompletionModal;

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    paddingVertical: 80,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
