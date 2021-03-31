import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import movie1 from '../assets/images/movie1.png';
import movie2 from '../assets/images/movie2.png';
import movie3 from '../assets/images/movie3.png';

function SectionHero() {
  return (
    <>
      <View style={styles.sectionHero}>
        <Image source={movie1} style={styles.pict1} />
        <Image source={movie2} style={styles.pict2} />
        <Image source={movie3} style={styles.pict3} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionHero: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90,
  },
  pict1: {
    marginTop: 60,
  },
  pict2: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  pict3: {
    // elevation: 2,
  },
});

export default SectionHero;
