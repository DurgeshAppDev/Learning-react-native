import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={style.mainStyle}>
     {showModal==true?
      <View style={style.mainModal}>
        <View style={style.innerModal}>
          <Text>ALERT TEXT</Text>
          <Button title="Close" onPress={()=>setShowModal(false)}/>
        </View>
      </View>:null

     }
      <Button title="Press" onPress={()=>setShowModal(true)} />
    </View>
  );
};

const style = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  mainModal: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(50,50,50,.5)'
  },
  innerModal: {
    backgroundColor:'white',
    height:200,
    width:250,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:5
  },
});

export default App;
