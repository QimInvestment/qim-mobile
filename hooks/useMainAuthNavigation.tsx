import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../types/auth-stack";

type NavProp = NativeStackNavigationProp<AuthStackParamList>;

const useMainAuthNavigation=()=>{
  const navigation = useNavigation<NavProp>()

  return  navigation
}

export default useMainAuthNavigation