import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// hook
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation";

// dummy_data
import { DUMMY_DATA } from "../../data/blogData";

const BlogService = () => {
  const route = useRoute();
  const { id } = route?.params as { id: string };

  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigation = useMainAuthNavigation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const scrollRef = useRef<ScrollView>(null!);

  const [article] = DUMMY_DATA.filter((data) => data.id === id);
  const index = DUMMY_DATA.indexOf(article);
  const dataIndex = DUMMY_DATA.length - 1;
  const nextIndex =
    index === dataIndex || index === dataIndex - 1 ? 0 : index + 1;

  useEffect(() => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  }, [id]);

  return {
    theme,
    navigation,
    showModal,
    setShowModal,
    scrollRef,
    nextIndex,
    article,
  };
};

export default BlogService;
