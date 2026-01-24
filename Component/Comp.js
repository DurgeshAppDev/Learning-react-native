import React from "react";
import { View, Text , StyleSheet} from "react-native";


const Comp=()=> {
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
    marginTop:5
  }
})

export default Comp;
