import { Text, View, Button } from "react-native"
import useMainAuthNavigation from "../../hooks/useMainAuthNavigation"
import CustomText from "../../components/shared/CustomText";

const DashboardScreen =()=>{
  const navigation = useMainAuthNavigation();

  return(
    <View>
      <CustomText>Dashboard Screen</CustomText>
      <Button title="Another Screen" onPress={()=>navigation.navigate("AnotherScreen")}/>
    </View>
  )
}

export default DashboardScreen