import React, { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ModalProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const SocialModal = ({ showModal, setShowModal }: ModalProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={[styles.modal, { backgroundColor: theme.backGroundColor }]}
        >
          <Text
            style={{
              color: theme.color,
              fontFamily: "MontserratBold",
              fontSize: 15,
            }}
          >
            Share too:
          </Text>

          <View></View>

          <Pressable onPress={() => setShowModal(!showModal)}>
            <Text
              style={{
                color: theme.color,
                fontFamily: "Montserrat",
                fontSize: 15,
              }}
            >
              Close Modal
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SocialModal;

const styles = StyleSheet.create({
  modal: {
    gap: 10,
    padding: 30,
    borderRadius: 20,
    // width: "80%",

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
