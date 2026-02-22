import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: 'USER LOGIN',
            headerTitleStyle: {
              fontSize: 15,
            },
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='AboutUs' component={AboutUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Welcome to login page login from there
      </Text>
      <Button title="home" onPress={() => props.navigation.navigate(Home)} />
       <Button title='AboutUs' onPress={()=> props.navigation.navigate(AboutUs)}/> 
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
const AboutUs = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center',margin:10 }}>
        Hello welcome to AboutUs  Screen
      </Text>
    </View>
  );
};

export default App;
