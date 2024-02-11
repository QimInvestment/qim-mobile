import { useEffect } from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { BottomTabsParamList } from '@/types/auth-stack';


import { TradeIcon, TradeIconGreen } from '../../assets/icons/bottonTabs';
import { COLORS } from '../../constants/theme';

// screens
import TradeIndex from '../../screens/trade/TradeIndex';
import Home from '../../screens/Home';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabsParamList>();
type NavProp = BottomTabNavigationProp<BottomTabsParamList>

const BottomNavigation =()=>{
  const navigation = useNavigation<NavProp>();

  // function trackBottomNav({navigation, route}){
  //   return({
  //     tabPress:()=>{
  //       console.log("mama mia", route)
  //     }
  //   })
  // }

  return(
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:COLORS.primaryGreen,
        tabBarStyle:{backgroundColor:COLORS.componentGray}
      }}
      // screenListeners={trackBottomNav}
      
    >
        <Tab.Screen 
          name="TradeBottomTab" 
          component={TradeIndex}
          options={{
            title:"Trade",
            tabBarIcon:({ focused, color, size})=>{
              return focused ? <TradeIconGreen/> : <TradeIcon/> 
            }
          }}
        />
        <Tab.Screen 
          name="PortfolioBottomTab" 
          component={Home}
          options={{
            title:"Portfolio"
          }}
        />
        <Tab.Screen 
          name="SearchBottomTab" 
          component={Home}
          options={{
            title:"Search"
          }}
        />
    </Tab.Navigator> 
  )
}

export default BottomNavigation;