import type { ThemeType } from '../types/theme';

function createTheme(theme='lightTheme'): ThemeType{
  const lightTheme : ThemeType={
    color: '#333333',
    backGroundColor: '#F6F6F6'
  }
  const darkTheme: ThemeType ={
    color: '#F7F9FC',
    backGroundColor: '#000712'
  }

  const presentTheme : ThemeType = theme === 'lightTheme' ? lightTheme : darkTheme

  return presentTheme;
}

const COLORS={
  exampleBackground: "rgba(232, 232, 232, 0.20)",
}

export{
  createTheme,
  COLORS
}