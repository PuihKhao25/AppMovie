import React from 'react';
import {ScrollView} from 'react-native';
import TrendingMovies from './Movies/TrendingMovies';
import NowShowingMovie from './Movies/NowShowingMovie';
import FooterMovies from '../Components/FooterMovies';
import Styles from '../Styles';
import { BannerMovies } from '../Components';

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
