import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react/cjs/react.development';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ButtonLocation() {
  const [city, setCity] = useState('City');
  console.log(city);
  return (
    <View style={style.parentFrame}>
      <View style={style.btnWrapper}>
        <Icon name="map-signs" style={style.iconCalendar} />
        <Picker
          selectedValue={city}
          style={style.btnLocation}
          onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
          <Picker.Item label="Choose Location" value="Choose Location" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bandung" value="Bandung" />
        </Picker>
        <Icon name="chevron-down" style={style.dropdownIcon} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  parentFrame: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  btnLocation: {
    height: 48,
    width: 260,
    backgroundColor: 'transparent',
    marginLeft: 5,
    fontSize: 16,
    color: '#4E4B66',
  },
  btnWrapper: {
    height: 48,
    width: 260,
    backgroundColor: '#EFF0F6',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  iconCalendar: {
    fontSize: 16,
    color: '#4E4B66',
  },
  buttonTitle: {
    fontSize: 16,
    color: '#4E4B66',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 16,
    color: '#4E4B66',
    marginRight: 15,
  },
});

export default ButtonLocation;
