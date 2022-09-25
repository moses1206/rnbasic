import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const PickerModule = () => {
  const [country, setCountry] = useState('korea');
  const [sliderValue, setSliderValue] = useState(50);

  const handleSlideValueChange = e => {
    setSliderValue(e);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={{width: 300, height: 40}}
        value={sliderValue}
        minimumValue={0}
        maximumValue={100}
        onValueChange={handleSlideValueChange}
        maximumTrackTintColor="red"
        minimumTrackTintColor="blue"
        step={1}
      />
      <Text style={styles.input}>{sliderValue}</Text>
      <ActivityIndicator
        style={{paddingTop: 20}}
        size="large"
        color="red"
        animating={false}
      />
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
  input: {
    width: '100%',
    marginTop: 15,
    fontSize: 25,
  },
});
