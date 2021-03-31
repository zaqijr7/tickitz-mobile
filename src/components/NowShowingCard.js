import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {chooseMovie} from '../redux/action/transaction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function NowShowingCard(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const movieSelect = id => {
    dispatch(chooseMovie(id));
    navigation.navigate('MovieDetail');
  };
  return (
    <>
      <TouchableOpacity onPress={() => movieSelect(props.id)}>
        <View style={styles.cardMovie}>
          <Image style={styles.thumbnailMovie} source={{uri: props.poster}} />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cardMovie: {
    height: 217,
    width: 154,
    marginVertical: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  thumbnailMovie: {
    width: 122,
    height: 185,
    borderRadius: 20,
  },
});

export default NowShowingCard;
