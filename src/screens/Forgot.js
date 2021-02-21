import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../assets/icons/tickitz-1.png';

function Forgot() {
  return (
    <>
      <ScrollView style={styles.parentRoot}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.titlePage}>Forgot password</Text>
          <Text style={styles.text}>
            we'll send a link to your email shortly
          </Text>
        </View>
        <View>
          <Text style={styles.labelForm}>Email</Text>
          <TextInput placeholder="Write your email" style={styles.formInput} />
        </View>
        <TouchableOpacity>
          <View style={styles.buttonActivate}>
            <Text style={styles.textButton}>Activate Now</Text>
          </View>
        </TouchableOpacity>
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
  buttonActivate: {
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
});
export default Forgot;
