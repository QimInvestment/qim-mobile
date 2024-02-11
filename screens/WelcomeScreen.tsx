import { Button, Text, View } from "react-native";
import useUnAuthNavigation from "../hooks/useUnAuthNavigation";

// assets
import GoogleLogoIcon from "../assets/icons/shared/GoogleLogoIcon";

// components
import CustomButton from "../components/shared/CustomButton";
import ButtonWithIcon from "../components/shared/ButtonWithIcon";

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
      <CustomButton
        buttonText="Next Screen"
        onPress={()=>navigation.navigate("ThemePreferenceScreen")}
      />
      <CustomButton
        buttonText="Switch Theme"
        onPress={()=>dispatch(toggleTheme())}
      />
      <ButtonWithIcon
        icon={<GoogleLogoIcon/>}
        buttonText="Continue to MySpace"
        onPress={()=>null}
      />
    </View>
  )
}

export default WelcomeScreen;