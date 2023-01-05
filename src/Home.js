import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BannerMovies from './Components/BannerMovies';
import TrendingMovies from './Components/TrendingMovies';
import NowShowingMovie from './Components/NowShowingMovie';
import FooterMovies from './Components/FooterMovies';
import Styles from './Styles';
import BookTickets from './Components/BookTickets';


const Home = props => {
  return (
    <>
      <ScrollView style={Styles.sectionBg}>
        <BannerMovies />
        <TrendingMovies />
        <NowShowingMovie />
        <FooterMovies />
      </ScrollView>
    </>
  );
};

export default Home;
