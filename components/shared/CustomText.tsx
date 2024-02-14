import { StyleProp, Text, TextStyle, TextProps } from "react-native";
import { PropsWithChildren } from "react";

type CustomTextProps={
  style?:StyleProp<TextStyle>
} & PropsWithChildren & TextProps

const CustomText =(props:CustomTextProps)=>{
  const {style, children} = props;
  return(
    <Text style={[style,{fontFamily:'Montserrat'}]} {...props}>{children}</Text>
  )
}

export default CustomText;