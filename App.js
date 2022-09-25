import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import utilities from './tailwind.json';
import Header from './src/Header';
import Generator from './src/Generator';
import Numlist from './src/Numlist';
import Input from './src/Input';
import PickerModule from './src/PickerModule';

export default function App() {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState(['a,b,c,d']);
  const handleAddInput = event => {
    setAlphabet([...alphabet, myTextInput]);
    setMyTextInput('');
  };

  return (
    <View style={styles.mainView}>
      <PickerModule />
      <View style={{width: '80%'}}>
        <TextInput
          style={styles.input}
          value={myTextInput}
          onChangeText={setMyTextInput}
          // 글자가 많아지면 개행해줌
          multiline={true}
          // 글자 숫자를 제한
          maxLength={100}
          // 첫번째 글자를 보통 대문자로 자동수정하는데 안되도록 설정
          autoCapitalize={'none'}
          // 인풋을 막음
          editable={true}
        />
        <Button title="add Text Input" onPress={handleAddInput} />
      </View>
      <ScrollView style={{width: '80%'}}>
        {alphabet.map((item, index) => (
          <Text key={index} style={styles.mainText}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'normal',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
  },
});
