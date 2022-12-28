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
        API_URL + '/api/v1/web/layDanhSachPhim?keyword=1&status=1',
      );
      return res;
    }
    getflim().then(response => {
      const result = response.data;
      setMovies(result.data);
    });
  }, []);
  return (
    <>
      <View>
        <Text style={Styles.heading}>Phim Sắp Chiếu</Text>
        <FlatList
          keyExtractor={item => item.banner}
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
          onPress={() => navigation.navigate('DetailMovies', {item})}
          style={{marginHorizontal: 10}}>
          <Image source={{uri: item.hinh_anh}} style={Styles.posterImage} />
          <Text style={Styles.movieTitle}>{item.ten_phim}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
