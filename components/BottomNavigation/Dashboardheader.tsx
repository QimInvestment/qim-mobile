import { ImageBackground, Text, View } from "react-native"

// asseets
import { Octicons } from '@expo/vector-icons';

// hooks
import { COLORS } from "../../constants/theme";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DashboardHeader =()=>{
  const theme = useSelector((state:RootState)=>state.theme.theme);

  return(
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold', color:theme.color, marginRight:8}}>Hello {"John Doe"}</Text>
      <Octicons name="bell-fill" size={24} color="white" />
    </View>
  )
}

export default DashboardHeader