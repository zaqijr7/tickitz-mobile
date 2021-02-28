import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import photo from '../assets/images/avatar.jpg';
import star from '../assets/icons/star.png';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react/cjs/react.development';
import {useDispatch, useSelector} from 'react-redux';
import {updatePhoto, updateProfileUser} from '../redux/action/auth';
import http from '../helper/http';
import ModalSuccess from '../components/ModalSuccess';

function Profile() {
  const navigation = useNavigation();
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdateProfile, setShowModalUpdateProfile] = useState(false);
  const [msgRes, setMsgRes] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [msgUpdateProfile, setMsgUpdateProfile] = useState(null);
  const choosePhotto = () => {
    setShowModal(!showModal);
  };

  const openGallery = () => {
    const options = {mediaType: 'photo'};
    launchImageLibrary(options, (response) => {
      if (response.fileSize > 2000000) {
        setMsgRes('the file is too large');
        setTimeout(() => {
          setMsgRes(null);
        }, 8000);
      } else {
        setImage(response);
      }
    });
  };

  const openCamera = () => {
    const options = {mediaType: 'photo'};
    launchCamera(options, (response) => {
      if (response.fileSize > 2000000) {
        setMsgRes('the file is too large');
        setTimeout(() => {
          setMsgRes(null);
        }, 8000);
      } else {
        setImage(response);
      }
    });
  };

  const uploadPhoto = async () => {
    const fileUpload = {
      uri: image.uri,
      type: 'image/jpeg',
      name: image.fileName,
    };
    const file = new FormData();
    file.append('photo', fileUpload);
    const response = await http(token).patch('update/photo', file);
    dispatch(updatePhoto(token, profile.id));
    setImage(null);
    setMsgRes(response.data.message);
    setTimeout(() => {
      setMsgRes(null);
    }, 8000);
  };

  const updateProfile = async () => {
    const params = new URLSearchParams();
    params.append('firstName', firstName || profile.firstName);
    params.append('lastName', lastName || profile.lastName);
    params.append('phoneNumber', phoneNumber || profile.phoneNumber);
    params.append('email', email || profile.email);
    params.append('password', confirmPassword);
    try {
      const updateProfiles = await http(token).put('/profile', params);
      dispatch(updateProfileUser(updateProfiles.data.results));
      const response = updateProfiles.data;
      setMsgUpdateProfile(response.message);
      setShowModalUpdateProfile(true);
      setTimeout(() => {
        setShowModalUpdateProfile(false);
      }, 8000);
    } catch (err) {
      const {message} = err.data;
      setMsgUpdateProfile(message);
      setShowModalUpdateProfile(true);
      setTimeout(() => {
        setShowModalUpdateProfile(false);
      }, 8000);
    }
  };
  console.log(msgUpdateProfile);
  return (
    <>
      <ScrollView>
        <ModalSuccess
          transparent={true}
          visible={showModalUpdateProfile}
          onPress={() => setShowModalUpdateProfile(false)}
          message={msgUpdateProfile}
        />
        <Modal transparent={true} visible={showModal} style={{flex: 1}}>
          <View style={styles.parentModal}>
            <View style={styles.bodyModal}>
              <View>
                <TouchableOpacity
                  onPress={() => openGallery()}
                  style={styles.btnChooseImage}>
                  <Text style={styles.textBtn}>Open Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openCamera()}
                  style={styles.btnChooseImage}>
                  <Text style={styles.textBtn}>Open Camera</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowBtnClose}>
                <TouchableOpacity
                  style={styles.btnClose}
                  onPress={() => setShowModal(false)}>
                  <Text style={styles.textBtn}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
              {profile.photo === 'UNDEFINED' ? (
                <TouchableOpacity
                  style={styles.parentWrapperPicture}
                  onPress={() => choosePhotto()}>
                  <View style={styles.layerChoosePhoto} />
                  <Icon name="camera" style={styles.iconCamera} />
                  <Image source={photo} style={styles.profilPicture} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.parentWrapperPicture}
                  onPress={() => choosePhotto()}>
                  <View style={styles.layerChoosePhoto} />
                  <Icon name="camera" style={styles.iconCamera} />
                  <Image
                    source={
                      image !== null ? {uri: image.uri} : {uri: profile.photo}
                    }
                    style={styles.profilPicture}
                  />
                </TouchableOpacity>
              )}
              {image && (
                <TouchableOpacity
                  onPress={() => uploadPhoto()}
                  style={styles.btnUpload}>
                  <Text style={styles.textBtn}>Upload Image</Text>
                </TouchableOpacity>
              )}
              {msgRes !== null && <Text>{msgRes}</Text>}
              <Text style={styles.textUsername}>{profile.firstName}</Text>
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
                <Text style={styles.labelForm}>First Name</Text>
                <TextInput
                  defaultValue={profile.firstName}
                  style={styles.formInput}
                  onChangeText={(value) => setFirstName(value)}
                />
              </View>
              <View>
                <Text style={styles.labelForm}>Last Name</Text>
                <TextInput
                  defaultValue={profile.lastName}
                  style={styles.formInput}
                  onChangeText={(value) => setLastName(value)}
                />
              </View>
              <View>
                <Text style={styles.labelForm}>Email</Text>
                <TextInput
                  defaultValue={profile.email}
                  style={styles.formInput}
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View style={styles.wrapperInput}>
                <Text style={styles.labelForm}>Phone Number</Text>
                <View style={styles.wrapperInputPhoneNumber}>
                  <Text style={styles.text62}>+62</Text>
                  <TextInput
                    defaultValue={profile.phoneNumber}
                    style={styles.formInputPhoneNumber}
                    keyboardType="phone-pad"
                    onChangeText={(value) => setPhoneNumber(value)}
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
                    onChangeText={(value) => setNewPassword(value)}
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
                    onChangeText={(value) => setConfirmPassword(value)}
                  />
                  <Icon name="eye" style={styles.eyeIcon} />
                </View>
              </View>
            </View>
          </View>
          {newPassword !== confirmPassword ? (
            <View style={styles.btnPayOrderDisabled}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                Update Changes
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.btnPayOrder}
              onPress={() => updateProfile()}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                Update Changes
              </Text>
            </TouchableOpacity>
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
  btnPayOrderDisabled: {
    width: '100%',
    height: 56,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
  layerChoosePhoto: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 136,
    width: 136,
    zIndex: 9,
    borderRadius: 100,
    position: 'absolute',
  },
  parentWrapperPicture: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCamera: {
    position: 'absolute',
    zIndex: 11,
    fontSize: 35,
    color: 'white',
  },
  parentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // position: 'absolute',
  },
  bodyModal: {
    backgroundColor: 'white',
    height: 270,
    width: 270,
    borderRadius: 15,
    padding: 20,
  },
  btnChooseImage: {
    width: '100%',
    backgroundColor: '#5F2EEA',
    height: 56,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  rowBtnClose: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnClose: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#ba0900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpload: {
    height: 40,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#007a27',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Profile;
