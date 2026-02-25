
import { View, Text} from 'react-native';
export const Home = (props) => {
  const {userName,userAge}=props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Hello welcome to Home Screen
      </Text>
      <Text style={{fontSize:20}}>Name: {userName}</Text>
      <Text style={{fontSize:20}}>Age: {userAge}</Text>
    </View>
  );
};
