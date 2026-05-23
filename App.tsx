import { } from 'react';
import { View, Text } from 'react-native';
import Product from './component/product.js';
import Header from "./component/header.js";

const App = () => {

  return(
    <View>
      <Text>hello world</Text>
      <Product/>
      <Header />
    </View>
  );
};

export default App;
