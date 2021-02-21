import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ebv from '../assets/icons/ebv.png';

function CardTicketHistory() {
  return (
    <View style={styles.cardTicket}>
      <View style={styles.rowHeadTicket}>
        <Image source={ebv} />
        <Text style={{fontSize: 13, color: '#AAAAAA', marginTop: 15}}>
          Tuesday, 07 July 2020 - 04:30pm
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
          {' '}
          Spider-Man: Homecoming
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
});

export default CardTicketHistory;
