import React, { useEffect } from "react";
import { View, Text , StyleSheet} from "react-native";


export const Comp=()=> {
    return (
      <View>
        <Text style={style.styling}>MY NAME IS ALICE</Text>
        <Text style={style.styling}>LEARING REACTNATIVE</Text>
        <Text style={style.styling}>USING TOGGLE</Text>
       </View>
    );
}

export const Greet=()=>{
  return(
    <View>
      <Text style={style.styling}>welcome to my Application</Text>
    </View>
  )
}
export const Search=()=>{
  return(
    <View>
      <Text style={style.styling}>Searching for anything thats:_____</Text>
    </View>
  )
}
export const Submit=()=>{
  return(
    <View>
      <Text style={style.styling}>submitted data succesfully</Text>
    </View>
  )
}
const style=StyleSheet.create({
  styling:{
    textAlign:'center',
    color:'black',
    fontSize:20
  }
})

