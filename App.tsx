import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [radioButton,setRadioButton]=useState(1);

  return (
    <View style={style.main}>
      <TouchableOpacity onPress={()=>setRadioButton(1)}>
        <View style={style.radioWrap}>
          <View style={style.radioButton}>
            {
              radioButton===1 
              ? <View style={style.radioButtonBg}></View>
              :null
              }
          </View>
          <Text style={style.radioText}>Male</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setRadioButton(2)}>
        <View style={style.radioWrap}>
          <View style={style.radioButton}>
            {
              radioButton===2
              ? <View style={style.radioButtonBg}></View>
              :null
            }
          </View>
          <Text style={style.radioText}>Female</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:50
  },
  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:5
  },
  radioButton: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: 'BLack',
    borderRadius: 20,
    margin: 5,
  },
  radioButtonBg: {
    height: 30,
    width: 30,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 3,
  },
  radioText:{
    textAlign: 'center', 
    fontSize: 20 
  }
});
export default App;
