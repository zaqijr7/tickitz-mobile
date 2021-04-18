import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Seats from '../components/Seats';
import {Picker} from '@react-native-picker/picker';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Order() {
  const [seat, setSeat] = useState('');
  const [numberSeat, setNumberSeat] = useState('');
  const [rowSelectSeat, setRowSelectSeat] = useState(1);
  const navigation = useNavigation();
  const listSeat = useSelector(state => state.transaction.listSeat);
  const handlePress = () => {};
  return (
    <>
      <ScrollView>
        <View style={styles.parentWrapper}>
          <View>
            <Text style={styles.textTitle}>Choose Your Seat</Text>
          </View>
          <View style={styles.cardParent}>
            <View style={styles.lineScreen} />
            <Seats />
            <Text style={styles.textSeatingKey}>Seating Key</Text>
            <View style={styles.row1}>
              <View style={styles.cardInfoSeat}>
                <View style={styles.row2}>
                  <Icon name="long-arrow-down" style={styles.iconArrow} />
                  <Text> A - G</Text>
                </View>
                <View style={styles.row2}>
                  <View style={styles.available} />
                  <Text>Available</Text>
                </View>
                <View style={styles.row2}>
                  <View style={styles.loveNest} />
                  <Text>Love nest</Text>
                </View>
              </View>
              <View style={styles.cardInfoSeat}>
                <View style={styles.row2}>
                  <Icon name="long-arrow-right" style={styles.iconArrow} />
                  <Text> 1 - 14 </Text>
                </View>
                <View style={styles.row2}>
                  <View style={styles.selected} />
                  <Text>Selected</Text>
                </View>
                <View style={styles.row2}>
                  <View style={styles.sold} />
                  <Text>Sold</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.rowChoosed}>
              <Text style={styles.textXhoosed}>Choosed</Text>
              <Text style={styles.textListSeat}>{listSeat.join(', ')}</Text>
            </View>
          </View>
          <View style={styles.cardParent2}>
            {[...Array(rowSelectSeat)].map((item, index) => {
              return (
                <View style={styles.rowCard}>
                  <TouchableOpacity>
                    <View style={styles.cardSeatSelect}>
                      <Picker
                        selectedValue={seat}
                        style={styles.dropdown}
                        onValueChange={(itemValue, itemIndex) =>
                          setSeat(itemValue)
                        }>
                        <Picker.Item label="Choose Seat" value="Choose Seat" />
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(
                          (item, index) => {
                            return (
                              <Picker.Item
                                label={`${item}`}
                                value={`${item}`}
                                key={String(index)}
                              />
                            );
                          },
                        )}
                      </Picker>
                      <Icon
                        name="chevron-down"
                        style={styles.iconArrowSelectSeat}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.cardSeatSelect}>
                      <Picker
                        selectedValue={numberSeat}
                        style={styles.dropdown}
                        onValueChange={(itemValue, itemIndex) =>
                          setNumberSeat(itemValue)
                        }>
                        <Picker.Item label="Choose Seat" value="Choose Seat" />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                          (item, index) => {
                            return (
                              <Picker.Item
                                label={`${item}`}
                                value={`${item}`}
                                key={String(index)}
                              />
                            );
                          },
                        )}
                      </Picker>
                      <Icon
                        name="chevron-down"
                        style={styles.iconArrowSelectSeat}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
            <TouchableOpacity
              style={styles.btnAddNewSeat}
              onPress={() => setRowSelectSeat(rowSelectSeat + 1)}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#5F2EEA'}}>
                  Add New Seat
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowBtnCheckout}>
            {listSeat.length === 0 ? (
              <View style={styles.btnCheckoutDisabled}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Checkout Now
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.btnCheckout}
                onPress={() => navigation.navigate('Payment')}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Checkout Now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  parentWrapper: {
    paddingHorizontal: 15,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
  },
  cardParent: {
    width: '100%',
    borderRadius: 20,
    height: 380,
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 2,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 2,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  cardParent2: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  lineScreen: {
    height: 7,
    width: '100%',
    borderRadius: 40,
    backgroundColor: '#9570FE',
    marginTop: 10,
  },
  textSeatingKey: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardInfoSeat: {
    width: 130,
  },
  iconArrow: {
    fontSize: 16,
    marginRight: 10,
    marginLeft: 7,
  },
  available: {
    height: 20,
    width: 20,
    backgroundColor: '#D6D8E7',
    borderRadius: 4,
    marginRight: 10,
  },
  loveNest: {
    height: 20,
    width: 20,
    backgroundColor: '#F589D7',
    borderRadius: 4,
    marginRight: 10,
  },
  selected: {
    height: 20,
    width: 20,
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    marginRight: 10,
  },
  sold: {
    height: 20,
    width: 20,
    backgroundColor: '#6E7191',
    borderRadius: 4,
    marginRight: 10,
  },
  rowCard: {
    width: 320,
    height: 88,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  cardSeatSelect: {
    height: 56,
    width: 130,
    backgroundColor: '#EFF0F6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  dropdown: {
    height: 56,
    width: 130,
    backgroundColor: 'transparent',
  },
  iconArrowSelectSeat: {
    position: 'absolute',
    color: '#A0A3BD',
    right: 0,
    marginRight: 10,
  },
  btnAddNewSeat: {
    width: '100%',
    height: 56,
    borderWidth: 2,
    borderColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  rowBtnCheckout: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnCheckout: {
    width: '100%',
    height: 56,
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 40,
  },
  btnCheckoutDisabled: {
    width: '100%',
    height: 56,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 40,
  },
  rowChoosed: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textChoosed: {
    fontSize: 16,
    color: '#4E4B66',
    fontWeight: '600',
  },
  textListSeat: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Order;
