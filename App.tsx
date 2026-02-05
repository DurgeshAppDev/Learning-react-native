import { useState } from 'react';
import { View, Text,Pressable,StyleSheet,ActivityIndicator,StatusBar,Platform} from 'react-native';

const App=()=>{
   const [show,setShow]=useState(false)
   const displayIndicator=()=>{
    setShow(true);

    setTimeout(() => {
      setShow(false);
    },300);
   }
  return(
<View style={style.main}>
  <StatusBar backgroundColor={'green'}
  hidden={show}
  />
  <ActivityIndicator color={'black'} size={50} animating={show}>

  </ActivityIndicator>
  <Pressable onPress={()=>displayIndicator()}  >
    <View>
      <Text>platform: {Platform.OS}</Text>
    {
      Platform.OS==='android'?
     <View >
    <Text style={style.PressableButtonAndroid}>Press</Text>
    </View>:
    <View>
     <Text style={style.PressableButtonIos}>Press</Text>
    </View>
    }
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
  PressableButtonAndroid:{
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
  },
  PressableButtonIos:{
    backgroundColor:'red',
   color:'white',
   height:"auto",
   width:200,
   textAlign:'center',
   justifyContent:'center',
   margin:10,
   padding:10,
   shadowColor:'black',
   elevation:25,
   borderWidth:3,
   borderColor:'red',
   borderRadius:10
  }
})

export default App;
