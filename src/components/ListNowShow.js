import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import movie3 from '../assets/images/movie/3.jpg';
import {chooseMovie} from '../redux/action/transaction';

function ListNowShow(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const movieSelect = id => {
    dispatch(chooseMovie(id));
    navigation.navigate('MovieDetail');
  };
  return (
    <>
      <TouchableOpacity
        style={style.cardList}
        onPress={() => movieSelect(props.id)}>
        <View style={style.row}>
          <View>
            <Image source={{uri: props.poster}} style={style.thumbnailMovie} />
          </View>
          <View style={style.rowTextDescription}>
            <Text style={style.titleText}>{props.title}</Text>
            <Text style={style.genreText}>{props.genre}</Text>
            <Text style={style.priceText}>Rp. {props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  thumbnailMovie: {
    height: 97.5,
    width: 65,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardList: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowTextDescription: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  genreText: {
    fontSize: 14,
    color: '#aaa',
  },
  priceText: {
    marginTop: 35,
    fontWeight: 'bold',
    color: '#248C00',
  },
});

export default ListNowShow;
