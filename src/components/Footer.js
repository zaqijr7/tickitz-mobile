import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

//import logo
import logo from '../assets/icons/Tickitz-2.png';
import cineone from '../assets/icons/cineone.png';
import ebv from '../assets/icons/ebv.png';
import hiflix from '../assets/icons/hiflix.png';
import fb from '../assets/icons/fbicon.png';
import ig from '../assets/icons/igicon.png';
import twit from '../assets/icons/twiticon.png';
import yt from '../assets/icons/yticon.png';

function Footer() {
  return (
    <>
      <View style={styles.footerMain}>
        <Image source={logo} />
        <Text style={styles.text}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
        <View>
          <Text style={styles.titleList}>Explore</Text>
          <View style={styles.listExplore}>
            <Text style={styles.textListExplore}>Cinemas</Text>
            <Text style={styles.textListExplore}>Movie List</Text>
            <Text style={styles.textListExplore}>Notification</Text>
          </View>
          <Text style={styles.textListExplore2}>My Ticket</Text>
        </View>
        <View>
          <Text style={styles.titleList}>Our Sponsor</Text>
          <View style={styles.listExplore}>
            <Image source={hiflix} />
            <Image source={cineone} />
            <Image source={ebv} />
          </View>
        </View>
        <View>
          <Text style={styles.titleList}>Follow Us</Text>
          <View style={styles.listExplore}>
            <Image source={fb} />
            <Image source={ig} />
            <Image source={twit} />
            <Image source={yt} />
          </View>
        </View>
        <Text style={styles.crTickitz}>
          © 2020 Tickitz. All Rights Reserved.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footerMain: {
    paddingHorizontal: 25,
    marginTop: 50,
  },
  text: {
    color: '#6E7191',
  },
  titleList: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30,
  },
  listExplore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textListExplore: {
    color: '#6E7191',
  },
  textListExplore2: {
    color: '#6E7191',
    marginTop: 20,
  },
  crTickitz: {
    marginTop: 80,
    marginBottom: 40,
    color: '#6E7191',
  },
});

export default Footer;
