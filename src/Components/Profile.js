import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from '../Styles';
import {AuthContext} from '../Constants/AuthContext';

const Profile = () => {
  const {userInfo, profile, getProfileUser} = useContext(AuthContext);
  const id = userInfo.content.taiKhoan;
  const maLoaiNguoiDung = userInfo.content.maLoaiNguoiDung;
  const hoTen = userInfo.content.hoTen;
  const email = userInfo.content.email;
  const soDt = userInfo.content.soDt;

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#151C26'}}>
        <View
          style={{
            height: 130,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 20,
            padding: 10,
            marginTop: 20,
          }}>
          <Text style={{color: 'white'}}>tai khoản : {id}</Text>
          <Text style={{color: 'white'}}>Họ tên : {hoTen}</Text>
          <Text style={{color: 'white'}}>Email : {email} </Text>
          <Text style={{color: 'white'}}> Số điện thoại: {soDt} </Text>
          <Text style={{color: 'white'}}>
            Mã loại người dùng : {maLoaiNguoiDung}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 40,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Sửa thông tin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              height: 40,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Lịch sử đã đặt{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;
