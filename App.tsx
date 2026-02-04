import { useState } from 'react';
import { View, Text,Pressable,StyleSheet } from 'react-native';

const App=()=>{

  return(
<View style={style.main}>
  <Pressable onPressOut={()=>console.log("onpress called")
  
   
  }>
    <View >
    <Text style={style.PressableButton}>Pressable test</Text>
    </View>
  </Pressable>
</View>

  )
}

const style=StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  PressableButton:{
   backgroundColor:'green',
   color:'white',
   height:"auto",
   width:200,
   textAlign:'center',
   justifyContent:'center',
   margin:10,
   padding:10,
   shadowColor:'black',
   elevation:20,
   borderWidth:2,
   borderColor:'green',
   borderRadius:10
  }
})

export default App;
