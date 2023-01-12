import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Styles from '../Styles';
import {useNavigation} from '@react-navigation/native';
import API_URL from '../Services/API';
import {useGetMoviePlaying} from '../hook';

export default function TrendingMovies() {
  const navigation = useNavigation();
  const {moviesPlay} = useGetMoviePlaying({});
  return (
    <>
      <View>
        <Text style={Styles.heading}>Phim Sắp Chiếu</Text>
        <FlatList
          keyExtractor={(item, index) => item.banner || index}
          data={moviesPlay}
          horizontal
          renderItem={item => displayMovies(item)}
        />
      </View>
    </>
  );
  function displayMovies({item, index}) {
    return (
      <TouchableOpacity
        key={item?.maPhim}
        onPress={() => navigation.navigate('DetailMovies', {item})}
        style={{marginHorizontal: 10}}>
        <Image source={{uri: item.hinhAnh}} style={Styles.posterImage} />
        <Text style={Styles.movieTitle}>{item.ten_phim}</Text>
      </TouchableOpacity>
    );
  }
}
