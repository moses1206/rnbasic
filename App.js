import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import utilities from './tailwind.json';
import Header from './src/Header';
import Generator from './src/Generator';
import Numlist from './src/Numlist';

export default function App() {
  const [appName, setAppName] = useState('My first app');
  const [random, setRandom] = useState([36, 999]);

  const onAddRandomNum = () => {
    //Math.floor ==> 소숫점 버림
    const randomNum = Math.floor(Math.random() * 100 + 1);
    setRandom([...random, randomNum]);
  };

  return (
    <View style={styles.mainView}>
      <Header appName={appName} />
      <View>
        <Text onPress={() => alert('text touch event')} style={styles.mainText}>
          Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNum} />
      <Numlist num={random} setRandom={setRandom} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'normal',
    padding: 20,
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
});
