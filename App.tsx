import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button ,Modal} from 'react-native';

const App = () => {
  const [data, setData] = useState<any>([]);
  const [modalVisible,setModalVisible]=useState(false)

  const apiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  const deleteUser = async (id)=>{
    const url='http://10.0.2.2:3000/users';
    let result= await fetch(`${url}/${id}`,{
      method:'delete'
    })

    result= await result.json();
    if (result){
      console.log('user deleted');
      apiData();
      setModalVisible(true);
    }
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.apiDataStyle}>
        <View style={{ flex: 1 }}>
          <Text>NAME</Text>
        </View>
        <View style={{ flex: 1.1 }}>
          <Text>AGE</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>OPERATION</Text>
        </View>
      </View>
      {data.length
        ? data.map((items: any) => (
            <View key={items.id} style={styles.apiDataStyle}>
              <View style={{ flex: 1.5 }}>
                <Text>{items.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{items.age}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Button title="update" onPress={() => {}} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="delete" onPress={() => {deleteUser(items.id)}} />
              </View>
            </View>
          ))
        : null}

        <Modal visible={modalVisible} transparent={true} animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text>User Deleted Successfully</Text>
              <Button title='ok' onPress={()=>setModalVisible(false)}/>
            </View>
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apiDataStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'green',
    margin:3,
    borderRadius:5
  },
  modalContainer:{
 flex:1,
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalBox:{
   backgroundColor:'green',
   alignItems:'center',
   padding:20,
   borderRadius:5,
   margin:5
  }
});

export default App;
