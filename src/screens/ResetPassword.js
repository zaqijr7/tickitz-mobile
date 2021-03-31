import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../assets/icons/tickitz-1.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import http from '../helper/http';
import {emailReset} from '../redux/action/auth';
import MessageBar from '../components/MessageBar';

function ResetPassword() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.emailReset);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [successRes, setSuccessRes] = useState(null);
  const handlePress = async () => {
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', confirmPassword);
      const response = await http().patch('/forgot', params);
      setSuccessRes(true);
      setMsg(response.data.message);
    } catch (err) {
      setSuccessRes(false);
      setMsg(err.response.data.message);
    }
  };

  console.log(msg);
  return (
    <>
      <ScrollView style={styles.parentRoot}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.titlePage}>Reset password</Text>
          <Text style={styles.text}>Enter New Password</Text>
        </View>
        {successRes !== null && (
          <MessageBar success={successRes} message={msg} />
        )}
        <View>
          <Text style={styles.labelForm}>New Password</Text>
          <View style={styles.formPassword}>
            <TextInput
              placeholder="New your password"
              style={styles.formInput}
              onChangeText={(text) => setNewPassword(text)}
            />
            <Icon name="eye" style={styles.eyeIcon} />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.labelForm}>Confirm Password</Text>
          <View style={styles.formPassword}>
            <TextInput
              placeholder="Confirm your password"
              style={styles.formInput}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <Icon name="eye" style={styles.eyeIcon} />
          </View>
        </View>
        {newPassword !== confirmPassword ? (
          <View style={styles.buttonDisabled}>
            <Text style={styles.textButton}>Reset Password</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handlePress()}>
            <View style={styles.buttonActivate}>
              <Text style={styles.textButton}>Reset Password</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  parentRoot: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: 30,
  },
  titlePage: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 26,
    marginBottom: 10,
  },
  text: {
    color: '#8692A6',
    marginBottom: 30,
  },
  labelForm: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },
  formInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingStart: 20,
    paddingVertical: 15,
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
  buttonActivate: {
    backgroundColor: '#5F2EEA',
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
export default ResetPassword;
