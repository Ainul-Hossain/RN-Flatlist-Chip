import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function App() {
  const [input, setInput] = useState('');

  const [data, setData] = useState([
    'JavaScript',
    'C',
    'C++',
    'PhP',
    'Python'
  ]);

  const textInputRef = useRef(null);

  const onChip = () => {
    const tempData = data;
    tempData.push(input);

    const temp = [];
    tempData.map((item) => {
      temp.push(item);
    });

    setData(temp);

    setInput('');

    requestAnimationFrame(() => {
      textInputRef.current.focus();
    });
  }

  const onClear = (ind) => {

    // console.log('Pressed', ind)

    // let tempData = data;

    // tempData = tempData.filter((item, i) => ind !== i);

    // setData(tempData);

    setData((prevData) => {
      prevData = prevData.filter((item, i) => ind !== i);
      return prevData;
    })

  }

  console.log(input);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={(value) => setInput(value)}
        onSubmitEditing={() => onChip(input)}
        ref={textInputRef}
        value={input}
        placeholderTextColor={'gray'}
        placeholder='Put your chip name...'
        style={{ height: 70, marginTop: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10 }}
      />

      <FlatList
        numColumns={2}
        style={{ width: '100%' }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 5, borderWidth: .5, borderColor: 'gray', borderRadius: 30, padding: 10, marginTop: 5 }}>
              <AntDesign name="user" size={24} color="black" />
              <Text>{item}</Text>

              <TouchableOpacity
                onPress={() => onClear(index)}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
  },
});
