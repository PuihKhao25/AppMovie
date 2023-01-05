import React from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import Styles from '../Styles';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment/moment';

const DetailMovies = ({route}) => {
  const navigation = useNavigation();
  if (route.params.item) {
    var {tenPhim, hinhAnh, trailer, moTa, ngay_khoi_chieu} =
      route.params.item;
  }
  return (
    <>
      <ScrollView style={Styles.sectionBg}>
        <View>
          <YoutubePlayer height={300} play={true} videoId={trailer} />
          <Text style={Styles.detailsMovieTitle}>Tên Phim :{tenPhim}</Text>
          <Text style={{color: 'white'}}>
            ngay_khoi_chieu: {moment(ngay_khoi_chieu).format('YYYY-MM-DD ')}
          </Text>
          <View>
            <Text>time</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#ffff',
              }}>
              <Button
                title="Mua vé"
                color={'#dc3545'}
                onPress={() => navigation.navigate('BookTickets')}
              />
            </View>
          </View>
          <Text style={{color: 'white',fontSize:20}}>Nội dung</Text>
          <Text style={Styles.overview}>{moTa}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailMovies;
