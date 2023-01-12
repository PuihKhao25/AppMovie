import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Styles from '../Styles';
import {useNavigation} from '@react-navigation/native';
import API_URL from '../Services/API';

export default function TrendingMovies() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getflim() {
      const res = await axios.get(
        API_URL + '/api/QuanLyPhim/LayDanhSachPhim?keyword=1&status=1',
      );
      return res;
    }
    getflim().then(response => {
      const result = response.data.content;
      setMovies(result);
    });
  }, []);
  return (
    <>
      <View>
        <Text style={Styles.heading}>Phim Sắp Chiếu</Text>
        <FlatList
          keyExtractor={(item, index) => item.banner || index}
          data={movies}
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
