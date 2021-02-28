import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import ebv from '../assets/icons/ebv.png';

function CardTicketHistory(props) {
  console.log(props.time, '<ini logo');
  return (
    <View style={styles.cardTicket}>
      <View style={styles.rowHeadTicket}>
        <Image source={{uri: props.logo}} style={styles.imageLogo} />
        <Text style={{fontSize: 13, color: '#AAAAAA', marginTop: 15}}>
          {`${moment(props.date).format('dddd')}, ${moment(props.date).format(
            'LL',
          )} - ${props.time}`}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
          {props.movie}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.rowBtn}>
        <TouchableOpacity style={styles.btnTicket}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            Ticket Active
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTicket: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 25,
    marginVertical: 20,
  },
  rowHeadTicket: {
    paddingHorizontal: 20,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: '#AAAAAA',
    marginVertical: 20,
  },
  btnTicket: {
    height: 40,
    width: 280,
    backgroundColor: '#00BA88',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBtn: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageLogo: {
    height: 38,
    width: 120,
  },
});

export default CardTicketHistory;
