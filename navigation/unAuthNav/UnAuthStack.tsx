import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// screens
import WelcomeScreen from '../../screens/WelcomeScreen';

// type
import type { UnAuthStackParamList } from '../../types/un-auth-stack';


const Stack = createNativeStackNavigator<UnAuthStackParamList>();

const UnAuthStack = ()=> {
  const navigation =  useNavigation();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft:()=><TouchableOpacity onPress={()=>navigation.goBack()}></TouchableOpacity>,
        headerStyle:{backgroundColor:'black'}
      }}
    >
      <Stack.Screen 
        name="WelcomeScreen" 
        component={WelcomeScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}

export default UnAuthStack;