import { Text, View, Button } from "react-native"
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation"

const DashboardScreen =()=>{
  const navigation = useMainAuthNavigation();

  return(
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="Another Screen" onPress={()=>navigation.navigate("AnotherScreen")}/>
    </View>
  )
}

export default DashboardScreen