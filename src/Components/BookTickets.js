import axios from 'axios';
import API_URL from '../Services/API';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Styles from '../Styles';
import {AuthContext} from '../Constants/AuthContext';
import moment from 'moment/moment';
import Spinner from 'react-native-loading-spinner-overlay';

const BookTickets = ({route}) => {
  const {isLoading, userInfo} = useContext(AuthContext);
  const {maLichChieu, maRap, ngayGioChieu, tenRap, gia_thuong, gia_vip} =
    route?.params;
  const [chairs, setChairs] = useState([]);
  const [selectedChairs, setSelectedChairs] = useState([]);
  const tai_khoan = userInfo.content.taiKhoan;
  useEffect(() => {
    async function getflim() {
      const res = await axios.get(
        API_URL + `/api/QuanLyRap/layGheTheoRap?maRap=${maRap}`,
      );
      return res;
    }
    getflim().then(response => {
      const result = response?.data?.content;
      const newData = result?.map(l => {
        if (l.tenGhe > 40) {
          return {...l, giaVeVip: gia_vip};
        }
        return {...l, giaVeThuong: gia_thuong};
      });
      if (newData) setChairs(newData);
    });
  }, []);

  const handleSeletedChairs = item => {
    const newSelectedChair = selectedChairs?.reduce(
      (acc, curr) => ((acc[curr?.tenGhe] = curr), acc),
      {},
    );
    if (newSelectedChair[item?.tenGhe]) {
      return setSelectedChairs(
        selectedChairs?.filter(i => i?.tenGhe !== item?.tenGhe),
      );
    }
    setSelectedChairs(selectedChairs => [...selectedChairs, item]);
  };

  const sumPrice = selectedChairs
    ?.map(s => s.giaVeThuong || s.giaVeVip)
    ?.reduce((partialSum, a) => partialSum + a, 0);

  const codeChairs = JSON.stringify(selectedChairs?.map(i => i?.ma_ghe));
  
  const submitBookTicts = () => {
    const valueSubmit = {
      tai_khoan: tai_khoan,
      ma_lich_chieu: maLichChieu,
      ma_ghe: codeChairs,
      tong_tien: sumPrice,
    };
    return axios.post(`${API_URL}/api/QuanLyDatVe/DatVe`, valueSubmit)
    .then(({ data }) => {
      Alert.alert('Đặt vé thành công');
    })
    .catch(e => {
      console.log(`BookTicks error ${e}`);
    });
  }
  return (
    <View>
      <Spinner visible={isLoading} />
      <ScrollView style={Styles.sectionBg}>
        <Text style={{color: 'red'}}>
          {moment(ngayGioChieu).format('hh:mm')}
        </Text>
        <Text>{tenRap}</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 15,
            justifyContent: 'center',
          }}>
          {chairs?.map(item => {
            return (
              <>
                <View key={item?.tenGhe} style={{padding: 2}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: `${
                        selectedChairs
                          ?.map(i => i?.tenGhe)
                          ?.includes(item?.tenGhe)
                          ? 'red'
                          : item?.giaVeVip
                          ? '#002f4f'
                          : 'black'
                      }`,
                      width: 30,
                      height: 30,
                      justifyContent: 'center',
                      borderColor: 'blue',
                      borderRadius: 2,
                    }}
                    onPress={() => handleSeletedChairs(item)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      {item.tenGhe}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
        <View>
          <Text>{sumPrice}</Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 50,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={submitBookTicts}
            style={{
              backgroundColor: '#1d8fe1',
              width: 100,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>Mua Vé</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookTickets;

const styles = StyleSheet.create({});
