import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Welcome to login page login from there
      </Text>
      <Button title="home" onPress={() => props.navigation.navigate(Home)} />
    </View>
  );
};

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Hello welcome to Home Screen
      </Text>
    </View>
  );
};

export default App;
