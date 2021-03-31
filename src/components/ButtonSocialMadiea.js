import React from 'react';
import {Image, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

//import icon
import Google from '../assets/icons/google.png';
import Facebook from '../assets/icons/facebook.png';

function ButtonSocialMedia() {
  return (
    <>
      <View style={styles.row}>
        <TouchableNativeFeedback>
          <View style={styles.cardButton}>
            <Image source={Google} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.cardButton}>
            <Image source={Facebook} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  cardButton: {
    backgroundColor: 'white',
    width: 64,
    height: 64,
    margin: 10,
    borderRadius: 10,
    elevation: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default ButtonSocialMedia;
