import { Button, Text, View } from "react-native";
import useUnAuthNavigation from "../hooks/useUnAuthNavigation";

const WelcomeScreen =()=>{
  const navigation =  useUnAuthNavigation();

  return(
    <View>
      <Text>Welcome</Text>
      <Button title="Next Screen" onPress={()=>navigation.navigate("ThemePreferenceScreen")}/>
    </View>
  )
}

export default WelcomeScreen;