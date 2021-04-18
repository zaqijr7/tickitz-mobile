/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import CardTicketHistory from '../components/CardTicketHistory';
import Footer from '../components/Footer';
import http from '../helper/http';

function OrderHistory() {
  const navigation = useNavigation();
  const [ticket, setTicket] = useState([]);
  const token = useSelector(state => state.auth.token);
  const getDataTicketHistory = async () => {
    try {
      const dataTicket = await http(token).get('ticket/list');
      setTimeout(() => {
        setTicket(dataTicket.data.results);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataTicketHistory();
  }, []);
  console.log(ticket);
  return (
    <>
      <ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={{textAlign: 'center', color: '#AAAAAA'}}>
              Details Account
            </Text>
          </TouchableOpacity>
          <View style={styles.tab}>
            <Text style={styles.tabActive}>Order History</Text>
          </View>
        </View>
        <View style={styles.parentWrapper}>
          {ticket.length === 0 ? (
            <ActivityIndicator size={20} color="black" />
          ) : (
            <>
              {ticket.map((item, index) => {
                return (
                  <CardTicketHistory
                    logo={item.logo}
                    date={item.showDate}
                    time={item.showTime}
                    movie={item.movie}
                  />
                );
              })}
            </>
          )}
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    height: '100%',
    // width: 170,
    marginHorizontal: 25,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#5F2EEA',
    textAlign: 'center',
    paddingBottom: 3,
    fontSize: 14,
  },
  parentWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
});

export default OrderHistory;
