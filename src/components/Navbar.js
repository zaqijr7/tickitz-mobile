import React, {Children, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../assets/icons/tickitz-1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function Navbar({children}) {
  const [bodyHeader, setBodyHeader] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.rootWrapper}>
        <View style={styles.navbarHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={Logo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBodyHeader(!bodyHeader)}>
            <Icon name="bars" style={styles.iconBar} />
          </TouchableOpacity>
        </View>
        {bodyHeader && (
          <>
            <View style={styles.navbarBody}>
              <View style={styles.wrapperNavbarBody}>
                <View style={styles.wrapperInput}>
                  <Icon name="search" style={styles.iconSearch} />
                  <TextInput style={styles.formInput} placeholder="Search..." />
                </View>
                <TouchableOpacity style={styles.listTextMenu}>
                  <Text style={styles.textMenu}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Movies</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Cinemas</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Buy Ticket</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Profile</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Dashboard</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.listTextMenu}>
                  <Text style={styles.crTickitz}>
                    © 2020 Tickitz. All Rights Reserved.
                  </Text>
                </View>
              </View>
              <View style={styles.tabOpacity} />
            </View>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootWrapper: {
    backgroundColor: 'white',
  },
  navbarHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  navbarBody: {
    // flex: 1,
    // position: 'absolute',
    // width: '100%',
    // bottom: -840,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  wrapperNavbarBody: {
    backgroundColor: 'white',
  },
  iconBar: {
    fontSize: 20,
  },
  formInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingStart: 40,
    paddingVertical: 10,
    width: '100%',
  },
  wrapperInput: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 30,
    marginBottom: 30,
    // backgroundColor: 'green',
  },
  iconSearch: {
    position: 'absolute',
    fontSize: 20,
    color: '#888',
    marginLeft: 34,
  },
  listTextMenu: {
    borderTopWidth: 0.6,
    borderColor: '#888',
    paddingVertical: 20,
  },
  textMenu: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#14142B',
  },
  crTickitz: {
    color: '#888',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  viewsParentRootTrue: {
    backgroundColor: 'rgb(97, 97, 97)',
  },
  viewsParentRootFalse: {
    backgroundColor: 'white',
  },
  tabOpacity: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: 250,
  },
});

export default Navbar;
