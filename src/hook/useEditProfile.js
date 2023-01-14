import axios from 'axios';
import {useEffect, useState} from 'react';
import API_URL from '../Services/API';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Constants/AuthContext';

const useEditProfile = ({taiKhoan, newData}) => {
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + userInfo.content.accessToken,
    },
  };
  console.log('taiKhoan, newData, config', taiKhoan, newData, config);
  const editProfile = async () => {
    return await axios
      .put(
        `${API_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung/${taiKhoan}`,
        newData,
        config,
      )
      .then(re => {
        console.log('re', re);
        navigation.navigate('Profile');
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    editProfile();
  }, []);
};

export default useEditProfile;
