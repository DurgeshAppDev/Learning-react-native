import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Home } from './Home';
export const Login = props => {
  const [userName, setUserName] = useState('Alice');
  const [userAge, setUserAge] = useState(2);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Welcome to login page login from there
      </Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: '#000',
        }}
        placeholder="Enter Name"
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: '#000',
        }}
        placeholder="Enter Age"
        onChangeText={text => setUserAge(text)}
      />
      <Button title="Home" onPress={() => props.navigation.navigate("Home",{userName,userAge})} />
    </View>
  );
};
