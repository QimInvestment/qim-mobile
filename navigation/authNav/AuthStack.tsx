import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import DashboardScreen from "../../screens/Dashboard/DashboardScreen";

import { AuthStackParamList } from "../../types/auth-stack";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          headerTitleAlign:'center',
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack;