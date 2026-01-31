import { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';


const App=()=>{

  return(
    <View style={{backgroundColor:'black'}}>
      <TouchableOpacity>
      <View style={style.main}>
        <Text>male</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const style=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App;