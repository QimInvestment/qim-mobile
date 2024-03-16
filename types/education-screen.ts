import { ImageSourcePropType } from "react-native";

export type EducationTopicCardProp = {
  data: {
    body: string;
    title: string;
    id: string;
    image?: ImageSourcePropType;
  };
};

export type EducationCardProp = {
  index: number;
} & EducationTopicCardProp;
