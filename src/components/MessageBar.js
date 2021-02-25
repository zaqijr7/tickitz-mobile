import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MessageBar(props) {
  return (
    <View
      style={
        props.success === true
          ? styles.alertMessageSuccesTrue
          : styles.alertMessageSuccesFalse
      }>
      <Text style={{fontWeight: 'bold', color: 'white'}}>
        {props.message} {props.timer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alertMessageSuccesFalse: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc0303',
    borderRadius: 10,
    marginBottom: 20,
  },
  alertMessageSuccesTrue: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a81c',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default MessageBar;
