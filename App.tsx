import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url);
   let result = await response.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      <Text style={{ fontSize: 20 }}>Fetching Api Data</Text>
      {data.length
        ? data.map(items => (
            <View
              style={{
                padding: 5,
                borderBottomWidth: 2,
                borderBottomColor: '#000',
              }}
            >
              <Text style={{ fontSize: 15, backgroundColor: '#8f7575' }}>
                {items.id}
              </Text>
              <Text style={{ fontSize: 15 }}>{items.title}</Text>
              <Text style={{ fontSize: 15 }}>{items.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};
export default App;
