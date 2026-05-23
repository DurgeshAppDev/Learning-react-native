import { } from 'react';
import { View, Text } from 'react-native';
import Product from './component/product.js';
import Header from "./component/header.js";

const App = () => {

<<<<<<< HEAD
  return(
=======
  const searchAPI = async (text: any) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setdata(result);
    }
  };
  return (
>>>>>>> d0d20f467b04eab400cfb27ce46a5c0214dc921c
    <View>
      <Text>hello world</Text>
      <Product/>
      <Header />
    </View>
  );
};

export default App;
