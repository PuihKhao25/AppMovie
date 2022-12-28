import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import API_URL from '../Services/API';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const BannerMovies = () => {
  const [movies, setMovies] = useState([]);
  const [itemCategory, SetitemCategory] = useState('1');
  const [imgActive, setimgActive] = useState(0);
  useEffect(() => {
    async function getBanner() {
      const res = await axios.get(API_URL + '/api/v1/web/layDanhSachBanner');
      return res;
    }
    getBanner().then(response => {
      const result = response?.data;
      setMovies(result?.data);
    });
  }, [itemCategory]);
  onchange = nativeEvent => {
    if (nativeEvent) {
      const silde = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (silde != imgActive) {
        setimgActive(silde);
      }
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={style.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={style.wrap}>
            {movies?.map((item, index) => {
              return (
                <>
                  <Image
                    key={index}
                    resizeMode="stretch"
                    style={style.wrap}
                    source={{
                      uri: item?.hinh_anh,
                    }}
                  />
                </>
              );
            })}
          </ScrollView>
          <View style={style.wrapDot}>
            {movies.map((item, index) => {
              // console.log('item', imgActive, item);
              return (
                <Text
                  key={index}
                  style={imgActive === index ? style.dotActive : style.dot}>
                  ●
                </Text>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});

export default BannerMovies;
