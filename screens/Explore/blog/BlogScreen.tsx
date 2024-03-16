import React from "react";
import { FlatList, Text, View } from "react-native";

//components
import BlogCard from "../../../components/explore/BlogCard";

// data
import { DUMMY_DATA } from "../../../data/blogData";

const BlogScreen = () => {
  return (
    <FlatList
      data={DUMMY_DATA}
      renderItem={({ item }) => <BlogCard article={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default BlogScreen;
