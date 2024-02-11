import { Button, Text, View } from "react-native"

// redux
import { useDispatch } from "react-redux";
import { signInAuthStatus } from "../redux/features/authSlice";

const ThemePreferenceScreen =()=>{
  const dispatch = useDispatch();

  return(
    <View>
      <Text>Theme Preference</Text>
      <Button title="Fake Login" onPress={()=>dispatch(signInAuthStatus())}/>
    </View>
  )
}

export default ThemePreferenceScreen