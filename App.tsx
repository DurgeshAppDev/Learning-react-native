import { useState } from 'react';
import { View, Text,Pressable,StyleSheet,ActivityIndicator } from 'react-native';

const App=()=>{
   const [show,setShow]=useState(false)
   const displayIndicator=()=>{
    setShow(true);

    setTimeout(() => {
      setShow(false);
    },5000);
   }
  return(
<View style={style.main}>
  <ActivityIndicator color={'black'} size={50} animating={show}>

  </ActivityIndicator>
  <Pressable onPress={()=>displayIndicator()}  >
    <View >
    <Text style={style.PressableButton}>Press</Text>
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
