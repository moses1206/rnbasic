import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const PickerModule = () => {
  const [country, setCountry] = useState('korea');
  return (
    <View style={styles.container}>
      <Picker
        style={{height: 50, width: 250}}
        selectedValue={country}
        onValueChange={(val, idx) => setCountry(val)}>
        <Picker.Item label="Korea" value={'korea'} />
        <Picker.Item label="Canada" value={'canada'} />
      </Picker>
    </View>
  );
};

export default PickerModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});
