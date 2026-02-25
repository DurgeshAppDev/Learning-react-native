import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Login } from './component/Login';
import { Home } from './component/Home';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen  name='Login' component={Login}/>
      <Tab.Screen  name='Home' component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
