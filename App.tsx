import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './component/Home';
import { Login } from './component/Login';
const Stack = createNativeStackNavigator();
const App = () => {
  const greet = () => {
    console.log('navigation button pressed');
  };
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
            headerLeft: () => <Button title="left" onPress={greet} />,
            headerRight: () => <Button title="right" onPress={greet} />,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
