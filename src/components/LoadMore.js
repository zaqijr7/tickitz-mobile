import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function LoadMore(props) {
  if (props.load === true) {
    return (
      <View style={style.row}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return <View />;
  }
}

const style = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default LoadMore;
