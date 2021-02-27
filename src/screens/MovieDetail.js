import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import ButtonDate from '../components/ButtonDate';
import CardSchedule from '../components/CardSchedule';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import ButtonLocation from '../components/ButtonLocation';
import {useSelector} from 'react-redux';
import {useEffect} from 'react/cjs/react.development';
import http from '../helper/http';

function MovieDetail() {
  const [listSchedule, setListSchedule] = useState(null);
  const [msgRes, setMsgRes] = useState('');
  const movieSelected = useSelector((state) => state.transaction.movie);
  const date = useSelector((state) => state.findSchedule.date);
  const city = useSelector((state) => state.findSchedule.city);
  const idMovie = useSelector((state) => state.transaction.movie.id);
  const moviePrice = useSelector((state) => state.transaction.movie.price);

  const getListSchedule = async () => {
    try {
      const params = new URLSearchParams();
      params.append('movie', idMovie);
      params.append('city', city);
      params.append('showDate', date);
      const response = await http().post('schedule', params);
      setListSchedule(response.data.results);
    } catch (err) {
      setListSchedule(null);
      setMsgRes(err.response.data.message);
    }
  };

  useEffect(() => {
    getListSchedule();
  }, [city, date]);

  return (
    <>
      <ScrollView style={styles.viewsParentRootFalse}>
        <View style={styles.rowThumbnailMovie}>
          <View style={styles.frameThumbnail}>
            <Image
              source={{uri: movieSelected.poster}}
              style={styles.pictThumbnail}
            />
          </View>
        </View>
        <View>
          <Text style={styles.titleMovie}>{movieSelected.title}</Text>
          <Text style={styles.textGenre}>{movieSelected.genre}</Text>
        </View>
        <View style={styles.row1}>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Release Date</Text>
            <Text>{moment(movieSelected.relaseDate).format('LL')}</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Directed By</Text>
            <Text>{movieSelected.director}</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Duration</Text>
            <Text>{movieSelected.runtime} Minute</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Casts</Text>
            <Text>{movieSelected.actors} etc.</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.synopisBody}>
          <Text style={styles.textSynopsis}>Synopsis</Text>
          <Text style={styles.paragraphSynopsis}>{movieSelected.synopsis}</Text>
        </View>
        <View>
          <Text style={styles.textShowtimes}>Showtimes and Tickets</Text>
        </View>
        <ButtonDate />
        <ButtonLocation />
        {listSchedule !== null ? (
          listSchedule.map((item, index) => {
            return (
              <CardSchedule
                idCinema={item.id_cinema}
                cinema={item.name}
                address={item.address}
                logo={item.logo}
                listShowTime={item.listShowTime}
                price={moviePrice}
              />
            );
          })
        ) : (
          <Text style={styles.textCenter}>Please choose date and location</Text>
        )}
        <View style={styles.rowPagination}>
          <TouchableOpacity>
            <View style={styles.btnPaginationActive}>
              <Text style={styles.numberPaginationActive}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnPagination}>
              <Text style={styles.numberPagination}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnPagination}>
              <Text style={styles.numberPagination}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnPagination}>
              <Text style={styles.numberPagination}>4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  viewsParentRootFalse: {
    backgroundColor: 'white',
  },
  rowThumbnailMovie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pictThumbnail: {
    height: 244,
    width: 159,
    borderRadius: 20,
  },
  frameThumbnail: {
    height: 308,
    width: 223,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#d6d6d6',
    marginTop: 40,
  },
  titleMovie: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  textGenre: {
    fontSize: 16,
    color: '#949494',
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 10,
  },
  row1: {
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  cardInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
  },
  titleCard: {
    fontSize: 13,
    color: '#949494',
    marginBottom: 5,
  },
  line: {
    marginHorizontal: 30,
    borderTopWidth: 1,
    borderColor: '#b5b5b5',
    marginVertical: 20,
  },
  synopisBody: {
    paddingHorizontal: 29,
  },
  textSynopsis: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
  paragraphSynopsis: {
    textAlign: 'justify',
    fontSize: 13,
    lineHeight: 18,
  },
  textShowtimes: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 30,
  },
  btnPaginationActive: {
    width: 40,
    height: 40,
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    elevation: 7,
  },
  btnPagination: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  rowPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 25,
  },
  numberPaginationActive: {
    color: 'white',
  },
  numberPagination: {
    color: 'black',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default MovieDetail;
