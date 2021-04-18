import React, {useState, useEffect} from 'react';
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
import Logo from '../assets/icons/tickitz-1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonSocialMedia from '../components/ButtonSocialMadiea';
import {useDispatch, useSelector} from 'react-redux';

//import action
import {login, cleanMsg} from '../redux/action/auth';
import {useNavigation} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const msg = useSelector(state => state.auth.message);
  const navigation = useNavigation();
  const handlePress = () => {
    dispatch(cleanMsg());
    setIsLoading(!isLoading);
    setTimeout(() => {
      dispatch(login(email, password));
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    if (msg !== '') {
      PushNotification.localNotification({
        channelId: 'general',
        title: 'Your Activity',
        message: msg,
      });
    }
  }, [msg]);
  return (
    <>
      <ScrollView style={styles.parentRoot}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.titlePage}>Sign In</Text>
        </View>
        <View>
          {msg !== '' && (
            <>
              <View style={styles.alertMessage}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>{msg}</Text>
              </View>
            </>
          )}
          <Text style={styles.labelForm}>Email</Text>
          <TextInput
            placeholder="Write your email"
            style={styles.formInput}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.labelForm}>Password</Text>
          <View style={styles.formPassword}>
            <TextInput
              placeholder="Write your password"
              style={styles.formInput}
              onChangeText={text => setPassword(text)}
            />
            <Icon name="eye" style={styles.eyeIcon} />
          </View>
        </View>
        {isLoading === true ? (
          <View style={styles.buttonJoin}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity onPress={() => handlePress()}>
            <View style={styles.buttonJoin}>
              <Text style={styles.textButton}>Sign in</Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.textLogin}>
              Forgot Your Password?
              <Text style={styles.loginLink}> Reset Now</Text>
            </Text>
          </TouchableOpacity>
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
    color: '#5F2EEA',
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
  alertMessage: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7063',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Login;
