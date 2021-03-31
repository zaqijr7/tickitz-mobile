import React from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import movie from '../assets/images/movie/3.jpg';
import ebv from '../assets/icons/ebv.png';
import hiflix from '../assets/icons/hiflix.png';
import cineone from '../assets/icons/cineone.png';
import ButtonLocation from '../components/ButtonLocation';
import ButtonDate from '../components/ButtonDate';

function Admin() {
  return (
    <ScrollView>
      <View style={styles.parentWrapper}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 25}}>
          Movie Description
        </Text>
        <View style={styles.card}>
          <View style={styles.frameThumbnail}>
            <Image source={movie} style={styles.thumbnailMovie} />
          </View>
          <TouchableOpacity style={styles.btnAddDescription}>
            <Text style={{fontWeight: 'bold', color: '#5F2EEA'}}>
              Add Description
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 25}}>
          Premier Location
        </Text>
        <View style={styles.card}>
          <ButtonLocation />
          <View style={styles.rowLogoCinema}>
            <Image style={styles.logoCinema} source={ebv} />
            <Image style={styles.logoCinema} source={hiflix} />
            <Image style={styles.logoCinema} source={cineone} />
            <Image style={styles.logoCinema} source={ebv} />
            <Image style={styles.logoCinema} source={hiflix} />
            <Image style={styles.logoCinema} source={cineone} />
          </View>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 25}}>
          Showtimes
        </Text>
        <View style={styles.card}>
          <ButtonDate />
          <View style={styles.rowTime}>
            <TouchableOpacity style={styles.btnPlus}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={styles.textTime}>08:30 AM</Text>
            <Text style={styles.textTime}>10:30 AM</Text>
            <Text style={styles.textTime}>12:30 PM</Text>
            <Text style={styles.textTime}>14:30 PM</Text>
            <Text style={styles.textTime}>16:30 PM</Text>
            <Text style={styles.textTime}>18:30 PM</Text>
            <Text style={styles.textTime}>20:30 PM</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  thumbnailMovie: {
    height: 244,
    width: 159,
    borderRadius: 10,
  },
  frameThumbnail: {
    height: 308,
    width: 233,
    borderWidth: 1.5,
    borderColor: '#AAAAAA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    paddingVertical: 50,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  btnAddDescription: {
    width: 223,
    height: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#5F2EEA',
  },
  rowLogoCinema: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCinema: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  btnPlus: {
    width: 58,
    height: 26,
    borderWidth: 1.5,
    borderColor: '#5F2EEA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rowTime: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textTime: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default Admin;
