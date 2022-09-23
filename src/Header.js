import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function Header({appName}) {
  return (
    <View style={styles.header}>
      <Text onPress={() => alert('Pressed!!')}>{appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
