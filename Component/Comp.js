import React, { useEffect } from "react";
import { View, Text , StyleSheet} from "react-native";


const Comp=()=> {
 let time= setInterval(()=>{
    console.log("hii");
  },3000)
  useEffect(()=>{
   return ()=> clearInterval(time)
  })
    return (
      <View>
        <Text style={style.styling}>MY NAME IS ALICE</Text>
        <Text style={style.styling}>LEARING REACTNATIVE</Text>
        <Text style={style.styling}>USING TOGGLE</Text>
        
      </View>
    );
}
const style=StyleSheet.create({
  styling:{
    fontSize:20,
    color:"orange",
    textAlign:"center",
    marginTop:10
  }
})

export default Comp;
