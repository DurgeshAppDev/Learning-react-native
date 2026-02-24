import { View, Text, Button } from 'react-native';
import { Home } from './Home';
export const Login = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Welcome to login page login from there
      </Text>
      <Button title="home" onPress={() => props.navigation.navigate(Home)} />
    </View>
  );
};
