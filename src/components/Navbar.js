import React, {Children, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import Logo from '../assets/icons/tickitz-1.png';
import Icon from 'react-native-vector-icons/FontAwesome';

function Navbar({children}) {
  const [bodyHeader, setBodyHeader] = useState(false);
  return (
    <>
      <View style={styles.rootWrapper}>
        <View style={styles.navbarHeader}>
          <Image source={Logo} />
          <TouchableOpacity onPress={() => setBodyHeader(!bodyHeader)}>
            <Icon name="bars" style={styles.iconBar} />
          </TouchableOpacity>
        </View>
        {bodyHeader && (
          <>
            <View style={styles.navbarBody}>
              <View>
                <View style={styles.wrapperInput}>
                  <Icon name="search" style={styles.iconSearch} />
                  <TextInput style={styles.formInput} placeholder="Search..." />
                </View>
                <Pressable
                  android_ripple={{
                    color: 'red',
                    radius: 20,
                  }}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Location</Text>
                  </View>
                </Pressable>
                <Pressable
                  android_ripple={{
                    color: 'red',
                    radius: 20,
                  }}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Movies</Text>
                  </View>
                </Pressable>
                <Pressable
                  android_ripple={{
                    color: 'red',
                    radius: 20,
                  }}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Cinemas</Text>
                  </View>
                </Pressable>
                <Pressable
                  android_ripple={{
                    color: 'red',
                    radius: 20,
                  }}>
                  <View style={styles.listTextMenu}>
                    <Text style={styles.textMenu}>Buy Ticket</Text>
                  </View>
                </Pressable>
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
    zIndex: 1,
  },
  navbarHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    paddingHorizontal: 24,
  },
  navbarBody: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    width: '100%',
    bottom: -725,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 3,
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
