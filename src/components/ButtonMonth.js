import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ButtonMonth(props) {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.buttonMonth}>
          <Text style={styles.textMonth}>{props.month}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonMonth: {
    height: 42,
    width: 127,
    borderWidth: 2,
    borderColor: '#5F2EEA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 30,
  },
  textMonth: {
    fontWeight: 'bold',
    color: '#5F2EEA',
  },
});

export default ButtonMonth;
