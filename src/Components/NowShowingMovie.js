import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Styles from '../Styles';
import {useNavigation} from '@react-navigation/native';
import API_URL from '../Services/API';
import {upcomingMovie} from '../hook';
export default function NowShowingMovie() {
  const navigation = useNavigation();
  const {movies} = upcomingMovie();
  return (
    <>
      <View>
        <Text style={Styles.heading}>Phim Đang Chiếu</Text>
        <FlatList
          keyExtractor={(item, index) => item.maPhim || index}
          data={movies}
          horizontal
          renderItem={item => displayMovies(item)}
        />
      </View>
    </>
  );
  function displayMovies({item}) {
    return (
      <>
        <TouchableOpacity
          key={item?.maPhim}
          onPress={() => navigation.navigate('DetailMovies', {item})}
          style={{marginHorizontal: 10}}>
          <Image source={{uri: item.hinhAnh}} style={Styles.posterImage} />
          <Text style={Styles.movieTitle}>{item.ten_phim}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
