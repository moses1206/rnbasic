import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Input = () => {
  const [myTextInput, setMyTextInput] = useState('');

  const onChangeInput = event => {
    setMyTextInput({myTextInput: event});
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.input}
        value={myTextInput}
        onChangeText={onChangeInput}
        // 글자가 많아지면 개행해줌
        multiline={true}
        // 글자 숫자를 제한
        maxLength={100}
        // 첫번째 글자를 보통 대문자로 자동수정하는데 안되도록 설정
        autoCapitalize={'none'}
        // 인풋을 막음
        editable={true}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
  },
});
