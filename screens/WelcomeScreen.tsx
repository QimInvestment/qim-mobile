import { Button, Text, View } from "react-native";
import useUnAuthNavigation from "../hooks/useUnAuthNavigation";

// redux
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";


const WelcomeScreen =()=>{
  const dispatch = useDispatch()
  const navigation =  useUnAuthNavigation();
  const theme = useSelector((state:RootState)=>state.theme.theme);

  return(
    <View style={{backgroundColor:theme.backGroundColor}}>
      <Text style={{color:theme.color}}>Welcome</Text>
      <Button title="Next Screen" onPress={()=>navigation.navigate("ThemePreferenceScreen")}/>
      <Button title="Switch Theme" onPress={()=>dispatch(toggleTheme())}/>
    </View>
  )
}

export default WelcomeScreen;