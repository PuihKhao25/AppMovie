import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import API_URL from '../Services/API';
import {AuthContext} from '../Constants/AuthContext';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  const {taiKhoan} = userInfo.content;
  const [info, setInfo] = useState();
  let config = {
    headers: {
      Authorization: 'Bearer ' + userInfo.content.accessToken,
    },
  };
  const getInfoUser = async () => {
    await axios
      .get(`${API_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan/${taiKhoan}`)
      .then(res => {
        const infoData = res?.data?.content;
        setInfo(infoData);
      })
      .catch(e => console.log(`Errro ${e}`));
  };
  useEffect(() => {
    getInfoUser();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#fff',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={styles.titleColor}>Tài Khoản: {info?.taiKhoan}</Text>
          <Text style={styles.titleColor}>Họ và Tên: {info?.hoTen} </Text>
          <Text style={styles.titleColor}>Số điện thoại: {info?.soDt} </Text>
          <Text style={styles.titleColor}>Email: {info?.email}</Text>
        </View>
        <View style={{marginTop: 10, height: 40}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
              width: 100,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0e101c',
  },
  titleColor: {
    color: '#fff',
  },
});
