import { Button, Text, View } from "react-native"

// redux
import { useDispatch } from "react-redux";
import { signInAuthStatus } from "../redux/features/authSlice";
import CustomText from "../components/shared/CustomText";

const ThemePreferenceScreen =()=>{
  const dispatch = useDispatch();

  return(
    <View>
      <CustomText>Theme Preference</CustomText>
      <Button title="Fake Login" onPress={()=>dispatch(signInAuthStatus())}/>
    </View>
  )
}

export default ThemePreferenceScreen