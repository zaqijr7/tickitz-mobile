import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ebv from '../assets/icons/ebv.png';

function CardSchedule() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.parentWrapper}>
        <View style={styles.parentCard}>
          <View style={styles.headCard}>
            <Image source={ebv} />
            <Text style={styles.textLocation}>
              Whatever street No.12, South Purwokerto
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.rowTime}>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textTime}>08:30am</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowPrice}>
            <Text style={styles.textPrice}>Price</Text>
            <Text style={styles.textPriceSeat}>$10.00/seat</Text>
          </View>
          <View style={styles.rowBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <View style={styles.btnBookNow}>
                <Text style={styles.titleBtn1}>Book Now</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnCart}>
                <Text style={styles.titleBtn2}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  parentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  parentCard: {
    alignItems: 'center',
    width: 327,
    height: 353,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  headCard: {
    alignItems: 'center',
    height: 80,
    justifyContent: 'center',
  },
  textLocation: {
    textAlign: 'center',
    marginTop: 10,
    color: '#AAAAAA',
  },
  line: {
    borderTopWidth: 0.5,
    width: '100%',
    marginTop: 25,
    marginHorizontal: 25,
  },
  rowTime: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textTime: {
    marginHorizontal: 5,
    marginVertical: 20,
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  textPrice: {
    color: '#6B6B6B',
    fontSize: 14,
  },
  textPriceSeat: {
    fontWeight: 'bold',
  },
  rowBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btnBookNow: {
    width: 134,
    height: 40,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBtn1: {
    fontWeight: 'bold',
    color: 'white',
  },
  titleBtn2: {
    fontWeight: 'bold',
    color: '#5F2EEA',
  },
  btnCart: {
    width: 134,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardSchedule;
