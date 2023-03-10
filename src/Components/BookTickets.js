import axios from 'axios';
import API_URL from '../Services/API';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Styles from '../Styles';
import {AuthContext} from '../Constants/AuthContext';
import moment from 'moment/moment';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import HeaderSreen from './HeaderSreen';

const BookTickets = ({route}) => {
  const {isLoading, userInfo} = useContext(AuthContext);
  const {maLichChieu, maRap, ngayGioChieu, tenRap, gia_thuong, gia_vip} =
    route?.params;
  const [chairs, setChairs] = useState([]);
  const [selectedChairs, setSelectedChairs] = useState([]);
  const navigation = useNavigation();
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
    return axios
      .post(`${API_URL}/api/QuanLyDatVe/DatVe`, valueSubmit)
      .then(({data}) => {
        Alert.alert('?????t v?? th??nh c??ng');
      })
      .catch(e => {
        console.log(`BookTicks error ${e}`);
      });
  };
  return (
    <View>
      <HeaderSreen iconLeft onIconLeft={navigation.goBack} title={'?????t v??'} />
      <Spinner visible={isLoading} />

      <ScrollView horizontal={false} style={Styles.sectionBg}>
        <View style={styles.container}>
          <View>
            <Text style={[styles.titleColor, styles.fontSizeColor]}>
              R???p: {tenRap}
            </Text>
            <Text style={[styles.titleColor, styles.fontSizeColor]}>
              Su???t: {moment(ngayGioChieu).format('hh:mm')}
            </Text>
          </View>
          <View>
            <Text style={[styles.titleColor, styles.fontSizeColor]}>
              T???ng gi?? V??: {sumPrice}
            </Text>
          </View>
          <View style={styles.BackgroundBookChair}>
            <View style={styles.row}>
              <View
                style={[styles.BackgroundChair, styles.backgroundChairVip]}
              />
              <Text style={[styles.titleColor, styles.rightChair]}>
                Gh??? Vip
              </Text>
            </View>
            <View style={styles.row}>
              <View
                style={[styles.BackgroundChair, styles.backgroundChairNormol]}
              />
              <Text style={[styles.titleColor, styles.rightChair]}>
                Gh??? Th?????ng
              </Text>
            </View>
            <View style={styles.row}>
              <View
                style={[
                  styles.BackgroundChair,
                  styles.backgroundChairSelecteds,
                ]}
              />
              <Text style={[styles.titleColor, styles.rightChair]}>
                Gh??? ???? ?????t
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerChair}>
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
                    <Text style={[styles.titleColor, styles.titleCenter]}>
                      {item.tenGhe}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.backgroundBookTicks}>
          <TouchableOpacity onPress={submitBookTicts} style={styles.buyTicks}>
            <Text style={styles.titleColor}>Mua V??</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookTickets;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackgroundChair: {
    width: 30,
    height: 30,
  },
  buyTicks: {
    backgroundColor: '#1d8fe1',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleColor: {
    color: '#fff',
  },
  titleCenter: {
    textAlign: 'center',
  },
  backgroundBookTicks: {
    flex: 1,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  containerChair: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'center',
  },
  BackgroundBookChair: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  rightChair: {
    marginLeft: 5,
  },
  backgroundChairVip: {
    backgroundColor: 'red',
  },
  backgroundChairNormol: {
    backgroundColor: 'yellow',
  },
  backgroundChairSelecteds: {
    backgroundColor: 'pink',
  },
  fontSizeColor: {
    fontSize: 17,
  },
});
