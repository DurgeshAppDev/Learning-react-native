import { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

const App=()=>{

  return(
    <View style={Style.main}>
      <Modal>
        <View style={Style.modalAlign}>
        <View style={Style.modalStyle}>
        <Text style={Style.modalText}>Unknown Credentials</Text>
        </View>
        </View>
      </Modal>

    </View>
  )
};

const Style=StyleSheet.create({
  main:{
    flex:1
  },
  modalStyle:{
    height:150,
    width:300,
    borderWidth:5,

  },
  modalText:{
    fontSize:20,
    padding:5,
    margin:5
  },
  modalAlign:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
        textAlign:'center'
  }
})
export default App;
