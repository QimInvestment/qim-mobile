import React from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

// components
import BlogCard from "../../../components/explore/BlogCard";
import GradientText from "../../../components/shared/GradientText";
import SocialModal from "../../../components/explore/SocialModal";
import { Ionicons } from "@expo/vector-icons";

// dummy_data
import { DUMMY_DATA } from "../../../data/blogData";

// services
import BlogService from "../../../service/Explore/BlogServices";

const Blog = () => {
  const {
    theme,
    navigation,
    showModal,
    setShowModal,
    scrollRef,
    nextIndex,
    article,
  } = BlogService();

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: StatusBar.currentHeight,
        backgroundColor: theme.backGroundColor,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <View style={{ position: "relative" }}>
          <Image style={styles.img} source={article.image} />

          <View style={styles.topBtns}>
            <Ionicons
              style={[
                styles.iconBtn,
                {
                  backgroundColor: theme.pinBackgroundColor,
                },
              ]}
              name="chevron-back-outline"
              size={28}
              color={theme.color}
              onPress={() => navigation.goBack()}
            />

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

        <View style={{ gap: 10, padding: 15 }}>
          <Text
            style={{
              color: theme.color,
              fontFamily: "MontserratBold",
              fontSize: 16,
            }}
          >
            {article?.title}
          </Text>

          <Text
            style={{
              color: theme.color,
              fontFamily: "Montserrat",
              fontSize: 15,
            }}
          >
            {article?.body}
          </Text>
        </View>

        <View style={{ gap: 5, padding: 10 }}>
          <Text
            style={{
              color: theme.color,
              fontFamily: "MontserratBold",
              fontSize: 16,
            }}
          >
            Related Updates
          </Text>

          <BlogCard article={DUMMY_DATA[nextIndex]} />
          <BlogCard article={DUMMY_DATA[nextIndex + 1]} />
        </View>

        {/* Modal */}
        <SocialModal showModal={showModal} setShowModal={setShowModal} />
      </ScrollView>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  img: {
    resizeMode: "cover",
    width: "100%",
    height: 230,
  },
  topBtns: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  iconBtn: {
    padding: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shareBtn: {
    borderRadius: 20,
    padding: 4,
  },
});
