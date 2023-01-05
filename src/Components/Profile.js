import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import Styles from '../Styles';
import {AuthContext} from '../Constants/AuthContext';

const Profile = () => {
  const {userInfo, profile, getProfileUser} = useContext(AuthContext);
  console.log('userInfo', userInfo);
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
            {' '}
            Mã loại người dùng : {maLoaiNguoiDung}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Profile;
