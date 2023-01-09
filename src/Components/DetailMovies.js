import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Styles from '../Styles';
import Video from 'react-native-video';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment/moment';
import API_URL from '../Services/API';

const DetailMovies = ({route}) => {
  const [times, setTimes] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const navigation = useNavigation();
  if (route.params.item) {
    var {maPhim, tenPhim, hinhAnh, trailer, moTa, ngay_khoi_chieu} =
      route.params.item;
  }
  useEffect(() => {
    async function getflim() {
      const res = await axios.get(
        API_URL + `/api/QuanLyRap/LayThongTinLichChieu?maPhim=${maPhim}`,
      );
      return res;
    }
    getflim().then(response => {
      const result = response.data.content;
      setTimes(result);
    });
  }, []);
  return (
    <>
      <ScrollView style={Styles.sectionBg}>
        <View>
          <YoutubePlayer height={300} play={true} videoId={trailer} />
          <View style={{padding: 10}}>
            <Text style={Styles.detailsMovieTitle}>Tên Phim : {tenPhim}</Text>
            <View>
              <Text style={{color: 'white', marginLeft: 35, fontSize: 20}}>
                Ngày khởi chiếu: {moment(ngay_khoi_chieu).format('YYYY-MM-DD ')}
              </Text>
            </View>
            <View style={{padding: 10}}>
              {times.map(item => {
                return (
                  <>
                    <View>
                      <TouchableOpacity onPress={() => setShowTime(!showTime)}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                          }}>
                          <Image
                            source={{uri: item.logo}}
                            style={{height: 50, width: 50, borderRadius: 20}}
                          />
                          <Text style={{fontSize: 20, marginLeft: 10}}>
                            {item.tenRap}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      {showTime && (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('BookTickets', item)
                          }
                          style={{
                            backgroundColor: 'hsla(0,0%,96%,.6)',
                            width: 70,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginTop: 5,
                            flex:1,
                            flexWrap: "wrap",
                          }}>
                          <Text>
                            {moment(item.ngayGioChieu).format('hh:mm')}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </>
                );
              })}
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{color: 'white', fontSize: 20}}>Nội dung</Text>
              <Text style={Styles.overview}>{moTa}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailMovies;
