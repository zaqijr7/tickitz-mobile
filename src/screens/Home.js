import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import NowShowingCard from '../components/NowShowingCard';
import SectionHero from '../components/SectionHero';

//import thumbnail movie
import movie1 from '../assets/images/movie/1.jpg';
import movie2 from '../assets/images/movie/2.jpg';
import movie3 from '../assets/images/movie/3.jpg';
import movie4 from '../assets/images/movie/4.jpg';
import movie5 from '../assets/images/movie/5.jpg';
import movie6 from '../assets/images/movie/6.jpg';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ButtonMonth from '../components/ButtonMonth';
import UpcomingCard from '../components/UpcomingCard';
import Footer from '../components/Footer';

function Home({navigation}) {
  return (
    <>
      <ScrollView style={styles.viewsParentRootFalse}>
        <View style={styles.mainSlogan}>
          <Text style={styles.textSmall}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.textBig}>Find out now!</Text>
        </View>
        <SectionHero />
        <View style={styles.nowShowingRow}>
          <View style={styles.nowShowing}>
            <Text style={styles.nowShowingText}>Now Showing</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetail')}>
                <NowShowingCard image={movie1} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetail')}>
                <NowShowingCard image={movie2} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetail')}>
                <NowShowingCard image={movie3} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetail')}>
                <NowShowingCard image={movie4} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View>
          <View style={styles.upcomingRow}>
            <Text style={styles.upcomingText}>Upcoming Movies</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ButtonMonth month="Sepetember" />
            <ButtonMonth month="October" />
            <ButtonMonth month="November" />
            <ButtonMonth month="December" />
            <ButtonMonth month="January" />
            <ButtonMonth month="February" />
            <ButtonMonth month="March" />
            <ButtonMonth month="April" />
            <ButtonMonth month="May" />
            <ButtonMonth month="June" />
            <ButtonMonth month="July" />
            <ButtonMonth month="August" />
          </ScrollView>
          <View>
            <ScrollView horizontal={true}>
              <UpcomingCard
                thumbnail={movie6}
                title="Tenet"
                genre="Action, SCI-FI, Mystery"
              />
              <UpcomingCard
                thumbnail={movie5}
                title="The Lite Things"
                genre="Action, SCI-FI, Mystery"
              />
              <UpcomingCard
                thumbnail={movie4}
                title="Whitches"
                genre="Action, SCI-FI, Mystery"
              />
              <UpcomingCard
                thumbnail={movie3}
                title="Combat Wombat"
                genre="Action, SCI-FI, Mystery"
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.movieGoersSection}>
          <Text style={styles.textVunguard}>Be the vanguard of the</Text>
          <Text style={styles.textMoviegoers}>Moviegoers</Text>
          <View>
            <TextInput
              placeholder="Type Your Email"
              style={styles.inputEmail}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.joinButton}>
              <Text style={styles.textJoin}>Join Now</Text>
            </View>
          </TouchableOpacity>
          <View style={{paddingHorizontal: 60}}>
            <Text
              style={{textAlign: 'center', color: '#6E7191', lineHeight: 25}}>
              By joining you as a Tickitz member, we will always send you the
              latest updates via email .
            </Text>
          </View>
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
  mainSlogan: {
    marginTop: 70,
    paddingHorizontal: 15,
  },
  textSmall: {
    color: '#A0A3BD',
    fontSize: 18,
  },
  textBig: {
    fontSize: 43,
    fontWeight: 'bold',
    color: '#5F2EEA',
    marginTop: 5,
  },
  nowShowing: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  nowShowingText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#5F2EEA',
  },
  viewAllText: {
    color: '#5F2EEA',
  },
  nowShowingRow: {
    backgroundColor: '#D6D8E7',
    marginTop: 90,
    paddingHorizontal: 15,
  },
  upcomingText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  upcomingRow: {
    marginTop: 50,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieGoersSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 100,
  },
  textVunguard: {
    fontSize: 15,
    color: '#4E4B66',
  },
  textMoviegoers: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5F2EEA',
  },
  inputEmail: {
    borderWidth: 1,
    width: 250,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#888',
    marginTop: 20,
  },
  joinButton: {
    width: 250,
    height: 55,
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  textJoin: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default Home;
