import type { COLORSType, ThemeType } from '../types/theme';

function createTheme(theme='lightTheme'): COLORSType{
  const lightTheme : ThemeType={
    color: '#333333',
    backGroundColor: '#F6F6F6'
  }
  const darkTheme: ThemeType ={
    color: '#F7F9FC',
    backGroundColor: '#000712'
  }

  const presentTheme : ThemeType = theme === 'lightTheme' ? lightTheme : darkTheme
  
  const allTheme: COLORSType={
   ...presentTheme,
   // other colors that don't switch comes here
   moreColor: 'brown'
  }

  return allTheme;
}

export{
  createTheme,
}