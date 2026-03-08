import { useState } from 'react';
import { View, TextInput,StyleSheet,Button } from 'react-native';


const App = () => {
  const [name ,setName]=useState('');
  const [age ,setAge]=useState(0);
  const [email ,setemail]=useState('');
 

  const addData= async ()=>{
    const url="http://10.0.2.2:3000/users";

    const response = await fetch(url);
      const users = await response.json();
  const newId = users.length + 1;

    const result= await fetch(url,
    {method :'POST',
    headers:{'content-type':"application/json"},
    body:JSON.stringify({newId,name,age,email})}
    );
  }
  return (
    <View  style={Styles.main}>
      <TextInput 
      style={Styles.textFeild}
       value={name} 
       placeholder="Enter name" 
        onChangeText={(text)=>setName(text)} />
      <TextInput 
      style={Styles.textFeild}
       value={age.toString()} 
       placeholder="Enter age" 
        onChangeText={(text)=>setAge(text)} />
      <TextInput 
      style={Styles.textFeild}
       value={email} 
       placeholder="Enter email" 
        onChangeText={(text)=>setemail(text)} />
        
        <Button  
        title='Submit data ' 
        onPress={()=> addData()
        }/>
    </View>
  );
};

const Styles=StyleSheet.create({
  main:{
  marginTop:20
  },
  textFeild:{
    borderWidth:1,
    borderColor:'black',
    margin:5
  }
})

export default App;
