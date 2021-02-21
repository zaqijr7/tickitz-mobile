import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function NowShowingCard(props) {
  return (
    <>
      <View style={styles.cardMovie}>
        <Image style={styles.thumbnailMovie} source={props.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardMovie: {
    height: 217,
    width: 154,
    marginVertical: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  thumbnailMovie: {
    width: 122,
    height: 185,
    borderRadius: 20,
  },
});

export default NowShowingCard;
