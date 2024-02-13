import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import DashboardScreen from "../../screens/Dashboard/DashboardScreen";

import { AuthStackParamList } from "../../types/auth-stack";
import BottomNavigation from "./BottomNavigation";
import AnotherScreen from "../../screens/AnotherScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={BottomNavigation}
        options={{
          headerShown:false,
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="AnotherScreen"
        component={AnotherScreen}
        options={{
          headerTitleAlign:'center',
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack;