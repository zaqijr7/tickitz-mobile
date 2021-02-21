import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function UpcomingCard(props) {
  return (
    <>
      <View style={styles.card}>
        <Image source={props.thumbnail} style={styles.thumbnail} />
        <View>
          <Text style={styles.textTitle}>{props.title}</Text>
        </View>
        <View>
          <Text style={styles.textGenre}>{props.genre}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.buttonDetail}>
              <Text style={styles.textDetail}>Detail</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 330,
    width: 152,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#DEDEDE',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  thumbnail: {
    height: 185,
    width: 120,
    borderRadius: 15,
  },
  textTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  textGenre: {
    textAlign: 'center',
    color: '#A0A3BD',
    marginTop: 10,
  },
  buttonDetail: {
    height: 30,
    width: 120,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#5F2EEA',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetail: {
    color: '#5F2EEA',
  },
});

export default UpcomingCard;
