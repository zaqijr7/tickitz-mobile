import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {set} from 'react-native-reanimated';

//import Icon
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

//import logo
import Logo from '../assets/icons/tickitz-1.png';
import ButtonSocialMedia from '../components/ButtonSocialMadiea';
import MessageBar from '../components/MessageBar';
import http from '../helper/http';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msgResponse, setMsgResponse] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigation = useNavigation();

  const handlePress = async () => {
    setIsLoading(!isLoading);
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      const response = await http().post('auth/register', params);
      setMsgResponse(response.data.message);
      setSuccess(response.data.success);
      setIsLoading(false);
    } catch (err) {
      setMsgResponse(err.response.data.message);
      console.log(err.response.data.message);
      setSuccess(err.response.data.success);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollView style={styles.parentRoot}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.titlePage}>Sign Up</Text>
        </View>
        {msgResponse !== null && (
          <MessageBar success={success} message={msgResponse} />
        )}
        <View>
          <Text style={styles.labelForm}>Email</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            placeholder="Write your email"
            style={styles.formInput}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.labelForm}>Password</Text>
          <View style={styles.formPassword}>
            <TextInput
              onChangeText={(value) => setPassword(value)}
              placeholder="Write your password"
              style={styles.formInput}
            />
            <Icon name="eye" style={styles.eyeIcon} />
          </View>
        </View>
        {isLoading === true ? (
          <TouchableOpacity>
            <View style={styles.buttonJoin}>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.buttonJoin}>
              <Text style={styles.textButton}>Join for free</Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.row}>
          <Text style={styles.textLogin}>
            Do you already have an account?
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.rowOr}>
          <View style={styles.lineOr} />
          <Text style={styles.textOr}> Or </Text>
          <View style={styles.lineOr} />
        </View>
        <ButtonSocialMedia />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  parentRoot: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
  },
  titlePage: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 26,
    marginBottom: 31,
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
  buttonJoin: {
    backgroundColor: '#5F2EEA',
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
  textLogin: {
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    marginTop: 10,
  },
  lineOr: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 100,
    height: 1,
  },
  rowOr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textOr: {
    marginHorizontal: 10,
    color: '#888',
  },
});

export default Register;
