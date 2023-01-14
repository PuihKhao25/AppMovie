import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../Constants/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {useGetUserProfile} from '../../hook';

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
  const {profile} = useGetUserProfile({taiKhoan});

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
          <Text style={styles.titleColor}>
            Tài Khoản: {profile?.taiKhoan}
          </Text>
          <Text style={styles.titleColor}>Họ và Tên: {profile?.hoTen} </Text>
          <Text style={styles.titleColor}>Số điện thoại: {profile?.soDt} </Text>
          <Text style={styles.titleColor}>Email: {profile?.email}</Text>
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
