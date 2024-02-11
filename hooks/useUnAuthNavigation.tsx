import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import type { UnAuthStackParamList } from "../types/un-auth-stack";

type NavProp = NativeStackNavigationProp<UnAuthStackParamList>;

const useUnAuthNavigation=()=>{
  const navigation = useNavigation<NavProp>()

  return  navigation
}

export default useUnAuthNavigation