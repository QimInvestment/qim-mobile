import { ColorValue } from "react-native"

export type ThemeType ={
  color: ColorValue,
  backGroundColor: string
}

export type COLORSType ={
  moreColor: string,
} & ThemeType