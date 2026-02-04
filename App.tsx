import { useState } from 'react';
import { View, Text, StyleSheet, Modal,Button } from 'react-native';


const App=()=>{
const [showmodal,setshowModal]=useState(false)
  return(
    <View style={Style.main}>
      <Modal  
      transparent={true}
      visible={showmodal}
      animationType='fade'
      >
        <View style={Style.modalAlign}>
        <View style={Style.modalStyle}>
        <Text style={Style.modalText}>Unknown Credentials</Text>
        <Button title='Close' onPress={()=>setshowModal(false)}/>
        </View>
        </View>
      </Modal>
      <View style={Style.buttonStyle}>
        <Button title= "Press Modal " onPress={()=> setshowModal(true)}/>
      </View>
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
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue',
    borderColor:'blue',
    borderRadius:10,
    shadowColor:'black',
    elevation:10
  },
  modalText:{
    fontSize:20,
    padding:5,
    margin:5,
    color:'white'
  },
  modalAlign:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  buttonStyle:{
    flex:1,
    justifyContent:'flex-end'
  }
})
export default App;
