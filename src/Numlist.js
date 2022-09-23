import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Numlist = ({num, handleDelete}) => {
  return num.map((item, idx) => (
    <TouchableOpacity
      key={idx}
      style={styles.numList}
      onPress={() => handleDelete(idx)}>
      <Text>{item}</Text>
    </TouchableOpacity>
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
