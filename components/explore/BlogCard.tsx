import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// componenets
import GradientText from "../shared/GradientText";
import SocialModal from "./SocialModal";
import { Ionicons } from "@expo/vector-icons";

// types
import { BlogCardProp } from "../../types/blog-screen";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// hook
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";

const BlogCard = ({
  article: { id, title, body, date, image },
}: BlogCardProp) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigation = useMainAuthNavigation();

  const shortBody = body.split(".")[0];

  return (
    <View
      style={[styles.conatiner, { backgroundColor: theme.backGroundColor }]}
    >
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.BottomNavBackgroundColor },
        ]}
      >
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={image} />
        </View>

        <View style={styles.textContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("Blog", {
                id,
              } as unknown as undefined);
            }}
            style={{ gap: 8 }}
          >
            <Text
              style={{
                color: theme.color,
                fontFamily: "MontserratBold",
                fontSize: 16,
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                color: theme.color,
                fontFamily: "Montserrat",
                fontSize: 15,
              }}
            >
              {`${
                shortBody.length > 200 ? shortBody.substring(0, 200) : shortBody
              } . . .`}
            </Text>
          </Pressable>

          <View style={styles.btns}>
            <Text
              style={{
                color: theme.color,
                fontFamily: "Montserrat",
                fontSize: 12,
              }}
            >
              {date}
            </Text>

            <Pressable
              onPress={() => setShowModal(true)}
              style={[
                styles.shareBtn,
                {
                  backgroundColor: theme.backGroundColor,
                },
              ]}
            >
              <GradientText>
                <Ionicons name="paper-plane-outline" size={28} />
              </GradientText>
            </Pressable>
          </View>
        </View>

        <SocialModal showModal={showModal} setShowModal={setShowModal} />
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    aspectRatio: 1 / 1,
    borderRadius: 18,
    overflow: "hidden",

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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shareBtn: {
    borderRadius: 20,
    padding: 4,
  },
});
