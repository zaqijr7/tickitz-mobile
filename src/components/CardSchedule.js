import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {cinemaTimeSelected} from '../redux/action/transaction';
import ebv from '../assets/icons/ebv.png';

function CardSchedule(props) {
  const navigation = useNavigation();
  const movieTitle = useSelector(state => state.transaction.movie.title);
  const dateShow = useSelector(state => state.findSchedule.date);
  const [time, setTime] = useState(null);
  const dispatch = useDispatch();
  const handlePress = idCinema => {
    dispatch(cinemaTimeSelected(idCinema, time, movieTitle, dateShow));
    navigation.navigate('Order');
  };
  console.log(time);
  return (
    <>
      <View style={styles.parentWrapper}>
        <Pressable style={styles.parentCard}>
          <View style={styles.headCard}>
            <Image source={{uri: `${props.logo}`}} style={styles.imageLogo} />
            <Text style={styles.textLocation}>{props.address}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.rowTime}>
            {props.listShowTime.map((items, index) => {
              return (
                <TouchableOpacity
                  key={String(index)}
                  style={time === items[0].id ? styles.clicked : ''}
                  onPress={() => setTime(items[0].id)}>
                  <Text style={styles.textTime}>{items[0].name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.rowPrice}>
            <Text style={styles.textPrice}>Price</Text>
            <Text style={styles.textPriceSeat}>${`${props.price}`}/seat</Text>
          </View>
          <View style={styles.rowBtn}>
            {time === null ? (
              <View style={styles.buttonDisabled}>
                <Text style={styles.titleBtn1}>Book Now</Text>
              </View>
            ) : (
              <TouchableOpacity onPress={() => handlePress(props.idCinema)}>
                <View style={styles.btnBookNow}>
                  <Text style={styles.titleBtn1}>Book Now</Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity>
              <View style={styles.btnCart}>
                <Text style={styles.titleBtn2}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>
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
    marginTop: 20,
    // justifyContent: 'space-between',
  },
  textTime: {
    marginHorizontal: 5,
    marginVertical: 15,
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
  imageLogo: {
    width: 120,
    height: 37.5,
  },
  clicked: {
    borderWidth: 1,
    borderColor: '#5F2EEA',
    borderRadius: 10,
  },
  buttonDisabled: {
    width: 134,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardSchedule;
