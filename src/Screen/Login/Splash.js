import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Styles from '../../Styles';

const SplashScreen = () => {
  return (
    <>
      <Text style={Styles.heading}>Liên hệ</Text>
      <View style={{marginBottom: 10, marginLeft: 10, marginRight:10}}>
        <Text>
        ● Địa chỉ: Tổ 40 phường hòa hài, quân ngũ hành sơn, đà nẵng @25/09/2022
        </Text>
        <Text>● Số ĐT: 0899367709</Text>
      </View>
    </>
  );
};

export default SplashScreen;
