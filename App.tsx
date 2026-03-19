import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [data, setdata] = useState<any>([]);

  const searchAPI = async (text: any) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setdata(result);
    }
  };
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}> Search here </Text>
      <TextInput
        style={{ fontSize: 20, borderWidth: 1, borderColor: '#000' }}
        placeholder="search"
        onChangeText={text => searchAPI(text)}
      />
      {data.length ? (
        data.map((item: any) => {
          return (
            <View>
              <Text style={{ fontSize: 20, color: '#d66868' }}>
                Name: {item.name}
              </Text>
              <Text style={{ fontSize: 20, color: '#d66868' }}>
                Age: {item.age}
              </Text>
            </View>
          );
        })
      ) : (
        <View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            No results found
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;
