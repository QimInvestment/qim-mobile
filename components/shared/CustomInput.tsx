import { COLORS } from "../../constants/theme";
import { View,Text, TextInput, TextInputProps, StyleProp, TextStyle, ViewStyle, StyleSheet } from "react-native";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import GoogleLogoIcon from "../../assets/icons/shared/GoogleLogoIcon";

type Props ={
  error?: string,
  labelText?: string,
  labelStyle?: StyleProp<TextStyle>,
  inputStyle?: StyleProp<TextStyle>,
  inputContainerStyle?: StyleProp<ViewStyle>,
  mainContainerStyle: StyleProp<ViewStyle>,
  leftIcon: React.ReactNode,
  rightIcon: React.ReactNode,
} & TextInputProps

type CustomInputProps = Partial<Props>

const CustomInput = (props:CustomInputProps)=>{
  const {error, labelText,labelStyle, inputContainerStyle, mainContainerStyle, inputStyle,
  leftIcon, rightIcon} = props;
  const theme = useSelector((state:RootState)=>state.theme.theme);

  return(
    <View style={[styles.mainCon, mainContainerStyle && mainContainerStyle]}>
      {labelText && <Text style={[{color:theme.color, marginBottom:3}, labelStyle]}>{labelText}</Text>}

      <View style={[styles.inputCon, inputContainerStyle && inputContainerStyle]}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        <TextInput
          {...props}
          placeholderTextColor="gray"
          returnKeyType="done"
          style={[{height:'100%', color:theme.color, flex:1, marginLeft:10}, inputStyle && inputStyle]}
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>

      {error && <Text style={{color:'red', fontSize:10}}>{error}</Text>}
    </View>
  )
}

export default CustomInput;

const styles = StyleSheet.create({
  mainCon:{
    width:'100%',
    marginBottom:20
  },
  inputCon:{
    backgroundColor:'transparent',
    borderColor:COLORS.borderColor, 
    borderWidth:1, 
    width:'100%', 
    height:50, 
    borderRadius:8, 
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
  },
  iconContainer:{
    paddingHorizontal: 15,
  }
})