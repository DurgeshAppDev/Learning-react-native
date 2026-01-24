// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { View, Text,Button} from 'react-native';
import Comp from "./Component/Comp.js";


const App=() =>{
  const [show,setShow]=useState(false);
  return(
    <View>
      <Text style={{fontSize:20,color:"orange",textAlign:"center",marginTop:10}}>
        show and hide component
        </Text>
      <Button title='toggle' onPress={()=> setShow(!show)} />
        {
          show==true
          ? <Comp />
          :null
        }
    </View>
  )
}



export default App;