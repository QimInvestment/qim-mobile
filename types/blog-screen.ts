import { ReactNode } from "react";
import { ImageSourcePropType, TextStyle } from "react-native";

type Article = {
  id: string;
  title: string;
  body: string;
  date: string;
  image: ImageSourcePropType;
};

export type BlogCardProp = {
  article: Article;
};

export type GradientTextProp = {
  style?: TextStyle;
  children: ReactNode;
};
