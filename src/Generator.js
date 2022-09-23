import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Generator = ({add}) => {
  return (
    <View style={styles.generator}>
      <Button onPress={() => add()} title="Add Number" />
    </View>
  );
};

export default Generator;

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
