import {SafeAreaView} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import UnAuthStack from "./unAuthNav/UnAuthStack";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const RootNavigation =()=>{
  const {isAuthenticated} = useSelector((state:RootState)=>state.auth);

  return(
    <NavigationContainer>
      <SafeAreaView/>
      {!isAuthenticated ? <UnAuthStack/> : <UnAuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigation