import { useState } from "react";
import { Button, Text, View } from "react-native";
import useUnAuthNavigation from "../hooks/useUnAuthNavigation";

// assets
import GoogleLogoIcon from "../assets/icons/shared/GoogleLogoIcon";
import { MaterialIcons } from '@expo/vector-icons';

// components
import CustomButton from "../components/shared/CustomButton";
import ButtonWithIcon from "../components/shared/ButtonWithIcon";

// redux
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";
import CustomInput from "../components/shared/CustomInput";
import { COLORS } from "../constants/theme";
import PinVerificationPane from "../components/shared/PinVerificationPane";
import CompletionModal from "../components/shared/CompletionModal";


const WelcomeScreen =()=>{
  const dispatch = useDispatch()
  const navigation =  useUnAuthNavigation();
  const theme = useSelector((state:RootState)=>state.theme.theme);
  const [pin, setPin] = useState("");
  const [isCompModalOpen, setIsCompModalOpen] = useState(false);

  return(
    <View style={{flex:1, backgroundColor:theme.backGroundColor}}>
      <Text style={{color:theme.color}}>Welcome</Text>
      <CustomButton
        buttonText="Next Screen"
        onPress={()=>navigation.navigate("ThemePreferenceScreen")}
      />
      <CustomButton
        buttonText="Switch Theme"
        onPress={()=>dispatch(toggleTheme())}
      />
      <CustomButton
        buttonText="Open Modal"
        onPress={()=>setIsCompModalOpen(true)}
      />
      <ButtonWithIcon
        icon={<GoogleLogoIcon/>}
        buttonText="Continue to MySpace"
        onPress={()=>null}
      />
      <CustomInput
        labelText="Full Name"
        placeholder="Enter Name"
        leftIcon={<MaterialIcons name="lock-outline" size={24} color={COLORS.iconColor} />}
        rightIcon={<MaterialIcons name="lock-outline" size={24} color={COLORS.iconColor} />}
      />
      <PinVerificationPane
        pin={pin}
        setPin={setPin}
      />
      <CompletionModal
        isCompModalOpen={isCompModalOpen}
        headingText="Congratulation"
        subHeadingText="You have successfully signed up on QimInvest, your one stop to ensure a seamless trading experience."
        completionText="Submit"
        completionAction={()=>setIsCompModalOpen(false)}
      />
    </View>
  )
}

export default WelcomeScreen;