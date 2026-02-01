import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const classSection = [
    {
      id: 1,
      sec: 'A',
    },
    {
      id: 2,
      sec: 'B',
    },
    {
      id: 3,
      sec: 'C',
    },
    {
      id: 4,
      sec: 'D',
    },
  ];
  const [radioButton, setRadioButton] = useState(1);

  return (
    <View style={style.main}>
      {classSection.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setRadioButton(item.id)}>
          <View style={style.radioWrap}>
            <View style={style.radioButton}>
              {radioButton === item.id ? (
                <View style={style.radioButtonBg}></View>
              ) : null}
            </View>
            <Text style={style.radioText}>{item.sec}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButton: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: 'BLack',
    borderRadius: 20,
    margin: 5,
  },
  radioButtonBg: {
    height: 30,
    width: 30,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 3,
  },
  radioText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default App;
