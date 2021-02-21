import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CardTicketHistory from '../components/CardTicketHistory';
import Footer from '../components/Footer';

function OrderHistory() {
  const navigation = useNavigation();
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
          <CardTicketHistory />
          <CardTicketHistory />
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
