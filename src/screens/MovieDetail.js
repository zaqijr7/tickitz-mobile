import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import wonderWoman from '../assets/images/movie/1.jpg';
import ButtonDate from '../components/ButtonDate';
import CardSchedule from '../components/CardSchedule';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import ButtonLocation from '../components/ButtonLocation';
import {useSelector} from 'react-redux';

function MovieDetail() {
  const movieSelected = useSelector((state) => state.transaction.movie);
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
            <Text>{movieSelected.relaseDate}</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Directed By</Text>
            <Text>Jon Watss</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Duration</Text>
            <Text>2 hrs 13 min</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.titleCard}>Casts</Text>
            <Text>Tom Holland, Robert Downey Jr., etc.</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.synopisBody}>
          <Text style={styles.textSynopsis}>Synopsis</Text>
          <Text style={styles.paragraphSynopsis}>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{' '}
          </Text>
        </View>
        <View>
          <Text style={styles.textShowtimes}>Showtimes and Tickets</Text>
        </View>
        <ButtonDate />
        <ButtonLocation />
        <CardSchedule />
        <CardSchedule />
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
});

export default MovieDetail;
