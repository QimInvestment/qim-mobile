import type { ThemeType } from '../types/theme';

function createTheme(theme='lightTheme'): ThemeType{
  const lightTheme : ThemeType={
    color: '#333333',
    backGroundColor: '#F6F6F6',
    pinBackgroundColor: "#fff",
    completionSubTextColor: "#6F6F6F",
    BottomNavBackgroundColor: "#fff",
    BottomNavLabelColor: "#928E85",
  }
  const darkTheme: ThemeType ={
    color: '#F7F9FC',
    backGroundColor: '#000712',
    pinBackgroundColor: "#404A50",
    completionSubTextColor: "#fff",
    BottomNavBackgroundColor: "#263238",
    BottomNavLabelColor: "#F7F9FC"
  }

  const presentTheme : ThemeType = theme === 'lightTheme' ? lightTheme : darkTheme

  return presentTheme;
}

const COLORS={
  borderColor: "#D3D3D3",
  iconColor: "#6F6F6F",
}

export{
  createTheme,
  COLORS
}