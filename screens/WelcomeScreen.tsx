import { Text, View } from "react-native";
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
import WelcomeScreenService from "../service/Welcome/WelcomeScreenService";
import CustomText from "../components/shared/CustomText";


const WelcomeScreen =()=>{
  const dispatch = useDispatch()
  const navigation =  useUnAuthNavigation();
  const theme = useSelector((state:RootState)=>state.theme.theme);

  // screen state and logic
  const {pin, setPin, isCompModalOpen, setIsCompModalOpen} = WelcomeScreenService();
  

  return(
    <View style={{flex:1, backgroundColor:theme.backGroundColor}}>
      <CustomText
        style={{color:theme.color}}
      >
        Welcome
      </CustomText>
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