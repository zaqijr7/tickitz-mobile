import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

//import icon payment
import googlePay from '../assets/icons/iconPayment/googlePay.png';
import visa from '../assets/icons/iconPayment/visa.png';
import gopay from '../assets/icons/iconPayment/gopay.png';
import paypal from '../assets/icons/iconPayment/paypal.png';
import ovo from '../assets/icons/iconPayment/ovo.png';
import dana from '../assets/icons/iconPayment/dana.png';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import http from '../helper/http';

function Payment() {
  const navigation = useNavigation();
  const totalPayment = useSelector(state => state.transaction.totalPayment);
  const profile = useSelector(state => state.auth.profile);
  const token = useSelector(state => state.auth.token);
  const transaction = useSelector(state => state.transaction);
  const date = useSelector(state => state.findSchedule.date);
  const seat = transaction.listSeat.join();
  const [statueRes, setStatusRes] = useState('');

  const handlePress = async () => {
    const params = new URLSearchParams();
    params.append('id_user', profile.id);
    params.append('id_movie', transaction.movie.id);
    params.append('id_cinema', transaction.cinema.id);
    params.append('id_showtime', transaction.showTime.id);
    params.append('showDate', date);
    params.append('seat', seat);
    params.append('totalPayment', totalPayment);
    try {
      const results = await http(token).post('transaction', params);
      console.log(results);
      navigation.navigate('Ticket');
    } catch (err) {
      setStatusRes(500);
    }
  };
  return (
    <ScrollView>
      <View style={style.rowTotalPayment}>
        <Text style={style.textTotalPayment}>Total Payment</Text>
        <Text style={style.textTotalCount}>Rp. {`${totalPayment}`}</Text>
      </View>
      <Text style={style.textPaymnetMethod}>Payment Method</Text>
      <View style={style.parentWrapperCardPayment}>
        <View style={style.cardBtnPaymnet}>
          <View style={style.row}>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={googlePay} />
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={visa} />
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={gopay} />
            </TouchableOpacity>
          </View>
          <View style={style.row}>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={paypal} />
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={ovo} />
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonCard}>
              <Image source={dana} />
            </TouchableOpacity>
          </View>
          <View style={style.rowOr}>
            <View style={style.lineOr} />
            <Text style={style.textOr}> Or </Text>
            <View style={style.lineOr} />
          </View>
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            Pay via cash.{' '}
            <Text style={{color: '#6E7191'}}> See how it work </Text>
          </Text>
        </View>
      </View>
      <Text style={style.textPaymnetMethod}>Personal Info</Text>
      <View style={style.parentWrapperCardPayment}>
        <View style={style.cardInfoPersonal}>
          <View>
            <View>
              <Text style={style.labelForm}>Full Name</Text>
              <TextInput
                placeholder={`${profile.firstName} ${profile.lastName}`}
                style={style.formInput}
              />
            </View>
            <View style={style.wrapperInput}>
              <Text style={style.labelForm}>Email</Text>
              <TextInput placeholder={profile.email} style={style.formInput} />
            </View>
            <View style={style.wrapperInput}>
              <Text style={style.labelForm}>Phone Number</Text>
              <View style={style.wrapperInputPhoneNumber}>
                <Text style={style.text62}>+62</Text>
                <TextInput
                  placeholder={profile.phoneNumber}
                  style={style.formInputPhoneNumber}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <View style={style.alert}>
              <Icon
                name="exclamation-triangle"
                style={{fontSize: 16, color: '#F4B740', marginRight: 10}}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 14, color: '#4E4B66'}}>
                Fill your data correctly
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={style.btnPayOrder}
          onPress={() => handlePress()}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
            Pay Your Order
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <Footer />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  rowTotalPayment: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textTotalPayment: {
    color: '#AAAAAA',
  },
  textTotalCount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textPaymnetMethod: {
    marginTop: 40,
    marginLeft: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // paymentLogo: {
  //   height: 14,
  //   width: 35,
  //   resizeMode: 'cover',
  // },
  buttonCard: {
    height: 40,
    width: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  cardBtnPaymnet: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    paddingTop: 35,
    paddingBottom: 20,
  },
  parentWrapperCardPayment: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  lineOr: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 100,
    height: 1,
    borderColor: '#DEDEDE',
  },
  rowOr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textOr: {
    marginHorizontal: 10,
    color: '#888',
  },
  labelForm: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  formInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingStart: 20,
    paddingVertical: 10,
    width: '100%',
  },
  formInputPhoneNumber: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingLeft: 55,
    paddingVertical: 10,
    width: '100%',
  },
  cardInfoPersonal: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 35,
  },
  wrapperInput: {
    marginTop: 15,
  },
  wrapperInputPhoneNumber: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text62: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: '#888',
    borderRightWidth: 1.5,
    borderRightColor: '#888',
  },
  alert: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(244, 183, 64, 0.3)',
    marginTop: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnPayOrder: {
    width: '100%',
    height: 56,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});

export default Payment;
