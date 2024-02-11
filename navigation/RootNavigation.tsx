import {SafeAreaView} from "react-native"
import { NavigationContainer } from "@react-navigation/native";

// redux
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

// stacks
import UnAuthStack from "./unAuthNav/UnAuthStack";
import AuthStack from "./authNav/AuthStack";

const RootNavigation =()=>{
  const {isAuthenticated} = useSelector((state:RootState)=>state.auth);

  return(
    <NavigationContainer>
      <SafeAreaView/>
      {!isAuthenticated ? <UnAuthStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigation