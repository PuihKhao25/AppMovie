import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Styles from '../Styles';

const DetailMovies = ({route, navigation}) => {
  if(route.params.item) {
    var {ten_phim, hinh_anh, mo_ta,ngay_khoi_chieu} = route.params.item;
  }
  return (
    <>
      <ScrollView style={Styles.sectionBg}>
        <View>
          <View>
            <Image source={{uri: hinh_anh}} style={Styles.imageBg} />
          </View>
          <Text style={Styles.detailsMovieTitle}>{ten_phim}</Text>
          <Text style={Styles.heading}>Nội dung</Text>
          <Text style={Styles.overview}>{mo_ta}</Text>
        </View>
        {/* <View style={Styles.detailsContainer}>
          <View>
            <Text style={Styles.heading}>Giá Tiền</Text>
            <Text style={Styles.details}>$ 00</Text>
          </View>

          <View>
            <Text style={Styles.heading}>Thời Lượng</Text>
            <Text style={Styles.details}>1 min.</Text>
          </View>

          <View>
            <Text style={Styles.heading}>Ngày Chiếu</Text>
            <Text style={Styles.details}>{ngay_khoi_chieu}</Text>
          </View>
        </View> */}
      </ScrollView>
    </>
  );
};

export default DetailMovies;
