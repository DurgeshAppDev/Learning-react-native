import { useState } from 'react';
import { View, Text,StyleSheet, TouchableHighlight} from 'react-native';
import {Comp,Greet,Search,Submit} from './Component/Comp.js' ;

const App=()=>{
 let [press,setpress]=useState(null);

  return(
    <View style={style.main}>
      <View style={style.halfBox}>
     <View style={style.singleComponent}>
      <TouchableHighlight onPress={()=>setpress("hello")}>
       <Text style={style.textStyle}>hello</Text>
       </TouchableHighlight>
       
     </View>
     <View style={style.singleComponent}>
      <TouchableHighlight onPress={()=>setpress("Greet")}>
       <Text style={[style.textStyle,style.Greet]}>Greet</Text>
       </TouchableHighlight>
     </View>
     <View style={style.singleComponent}>
      <TouchableHighlight onPress={()=>setpress("search")}>
       <Text style={[style.textStyle,style.search]}>search</Text>
       </TouchableHighlight>
     </View>
    <View style={style.singleComponent}>
      <TouchableHighlight onPress={()=>setpress("submit")}>
       <Text style={[style.textStyle,style.submit]}>submit</Text>
       </TouchableHighlight>
     </View>
     </View>
     {press === 'hello' && <Comp/>}
     {press === 'Greet' && <Greet/>}
     {press === 'search' && <Search/>}
     {press === 'submit' && <Submit/>}
    </View>
  )
}

const style=StyleSheet.create({
  main:{
    flex:1,
    margin:10,
  },
  halfBox:{
    width:'100%',
    height:'50%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  singleComponent:{
  width:'50%',
  height:'50%',
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderRadius:10,
  borderColor:'#120202'
  },
  textStyle:{
    fontSize:20,
    backgroundColor:'#f30000',
    color:'#000000',
    textAlign:'center',
    padding:5,
    margin:10,
    borderRadius:5,
    shadowColor:'black',
    elevation:10
    },
  Greet:{
    backgroundColor:'green'
  },
  search:{
    backgroundColor:'blue'
  },
  submit:{
    backgroundColor:'yellow'
  }
})
export default App;