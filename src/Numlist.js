import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Numlist = ({num, setRandom}) => {
  const handleDelete = idx => {
    if (num.idx === idx) {
      const newNum = num.filter(num.idx !== idx);
      setRandom(newNum);
    }
  };

  return num.map((item, idx) => (
    <View key={idx} style={styles.numList}>
      <Text onPress={handleDelete(idx)}>{item}</Text>
    </View>
  ));
};

export default Numlist;

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
