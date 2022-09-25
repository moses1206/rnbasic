import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import utilities from './tailwind.json';
import Header from './src/Header';
import Generator from './src/Generator';
import Numlist from './src/Numlist';
import Input from './src/Input';
import PickerModule from './src/PickerModule';
import onePicture from './assets/images/1.jpg';

export default function App() {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState(['a,b,c,d']);
  const handleAddInput = event => {
    setAlphabet([...alphabet, myTextInput]);
    setMyTextInput('');
  };

  return (
    <View style={styles.mainView}>
      {/* 주어진 공간 내에서 사진 전체를 보여주는 것 contain 속성 */}
      {/* <Image source={onePicture} style={styles.image} resizeMode="contain" /> */}
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/19/15/23/pumpkin-2519423_960_720.jpg',
        }}
      />
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
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
});
