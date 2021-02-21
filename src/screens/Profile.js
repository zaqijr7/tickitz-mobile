import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../assets/images/my-photo.jpg';
import star from '../assets/icons/star.png';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';

function Profile() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.tabBar}>
          <View style={styles.tab}>
            <Text style={styles.tabActive}>Details Account</Text>
          </View>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('OrderHistory')}>
            <Text style={{textAlign: 'center', color: '#AAAAAA'}}>
              Order History
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.parentRootWrapper}>
          <View style={styles.cardInfoProfile}>
            <View style={styles.rowTabInfo}>
              <Text style={styles.textInfo}>INFO</Text>
              <Icon name="ellipsis-h" style={{fontSize: 19}} />
            </View>
            <View style={styles.rowPicture}>
              <Image source={photo} style={styles.profilPicture} />
              <Text style={styles.textUsername}>Muhammad Zaqi A</Text>
              <Text>Moviegoers</Text>
            </View>
            <View style={styles.line} />
            <Text style={{marginLeft: 45, fontSize: 16, color: '#4E4B66'}}>
              Loyalti Point
            </Text>
            <View style={styles.rowCardMoviegoers}>
              <View style={styles.cardMoviegoers}>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <View style={styles.rowMoviegoersText}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                    Moviegoers
                  </Text>
                  <Image source={star} />
                </View>
                <Text style={{color: 'white', marginTop: 10, fontSize: 24}}>
                  320 <Text style={{fontSize: 10}}>Points</Text>
                </Text>
              </View>
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 25,
                color: '#4E4B66',
              }}>
              180 points become a master
            </Text>
            <View style={styles.rowStatusBar}>
              <View style={styles.statusBarParent}>
                <View style={styles.valueStatusBar} />
              </View>
            </View>
          </View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Account Settings
          </Text>
          <View style={styles.cardInfoProfile}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AAAAAA',
                paddingBottom: 10,
              }}>
              <Text style={{fontSize: 16}}>Detail Informations</Text>
            </View>
            <View>
              <View>
                <Text style={styles.labelForm}>FullName</Text>
                <TextInput
                  placeholder="Muhammad Zaqi A"
                  style={styles.formInput}
                />
              </View>
              <View>
                <Text style={styles.labelForm}>Email</Text>
                <TextInput
                  placeholder="Write your email"
                  style={styles.formInput}
                />
              </View>
              <View style={styles.wrapperInput}>
                <Text style={styles.labelForm}>Phone Number</Text>
                <View style={styles.wrapperInputPhoneNumber}>
                  <Text style={styles.text62}>+62</Text>
                  <TextInput
                    placeholder="85842752523"
                    style={styles.formInputPhoneNumber}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardInfoProfile}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AAAAAA',
                paddingBottom: 10,
              }}>
              <Text style={{fontSize: 16}}>Account and Privacy</Text>
            </View>
            <View>
              <View style={{marginTop: 15}}>
                <Text style={styles.labelForm}>New Password</Text>
                <View style={styles.formPassword}>
                  <TextInput
                    placeholder="Write your password"
                    style={styles.formInput}
                  />
                  <Icon name="eye" style={styles.eyeIcon} />
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <Text style={styles.labelForm}>Confirm Password</Text>
                <View style={styles.formPassword}>
                  <TextInput
                    placeholder="Write your password"
                    style={styles.formInput}
                  />
                  <Icon name="eye" style={styles.eyeIcon} />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.btnPayOrder}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              Update Changes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  parentRootWrapper: {
    paddingHorizontal: 25,
  },
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
  cardInfoProfile: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 35,
    borderRadius: 10,
    elevation: 2,
  },
  rowTabInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  textInfo: {
    fontSize: 16,
    color: '#4E4B66',
  },
  profilPicture: {
    height: 136,
    width: 136,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  rowPicture: {
    alignItems: 'center',
    marginTop: 20,
  },
  textUsername: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  line: {
    width: '100%',
    borderTopWidth: 0.8,
    borderTopColor: '#AAAAAA',
    marginVertical: 40,
  },
  cardMoviegoers: {
    width: 248,
    height: 125,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    position: 'relative',
    paddingHorizontal: 15,
  },
  circle1: {
    width: 122,
    height: 122,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 200,
    right: -20,
    top: -40,
  },
  circle2: {
    width: 130,
    height: 130,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 200,
    right: -50,
    top: -30,
  },
  rowMoviegoersText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rowCardMoviegoers: {
    alignItems: 'center',
    marginTop: 25,
  },
  statusBarParent: {
    width: 248,
    height: 16,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
  },
  valueStatusBar: {
    height: '100%',
    width: 126,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
  },
  rowStatusBar: {
    alignItems: 'center',
    marginBottom: 40,
  },
  labelForm: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
    marginTop: 25,
  },
  formInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingStart: 20,
    paddingVertical: 10,
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
  formInputPhoneNumber: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingLeft: 55,
    paddingVertical: 10,
    width: '100%',
  },
  wrapperInput: {
    marginBottom: 30,
  },
  formPassword: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
    color: '#888',
    fontSize: 16,
  },
  btnPayOrder: {
    width: '100%',
    height: 56,
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
});

export default Profile;
