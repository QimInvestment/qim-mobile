import { ColorValue } from "react-native"

export type ThemeType ={
  color: ColorValue,
  backGroundColor: ColorValue,
  pinBackgroundColor: ColorValue,
  completionSubTextColor: ColorValue,
  BottomNavBackgroundColor: ColorValue,
  BottomNavLabelColor:ColorValue,
}

export type COLORSType ={
  moreColor: string,
} & ThemeType