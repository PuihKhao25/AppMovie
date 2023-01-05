import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import API_URL from '../Services/API';
import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [profile,setProfile] = useState('')
  console.log("userInfo",userInfo);
  const login = (hoTen, matKhau) => {
    setIsLoading(true);
    axios
      .post(`${API_URL}/api/QuanLyNguoiDung/DangNhap`, {
        hoTen,
        matKhau,
      })
      .then(res => {
        console.log('user',res.data);
        const userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const Register = (hoTen, email, soDt, matKhau,setHo_ten) =>{
    setIsLoading(true);

    axios
      .post(`${API_URL}/api/QuanLyNguoiDung/DangKy`, {
        hoTen, email, soDt, matKhau
      })
      .then(res => {
        Alert.alert('Đăng kí thành công')
        setHo_ten('')
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Register error ${e}`);
        setIsLoading(false);
      });

  }

  const logout = () => {
    setUserInfo(null);
    AsyncStorage.removeItem('userInfo');
    
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      const userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  const getProfileUser = async(id) =>{

  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        profile,
        login,
        logout,
        Register,
        getProfileUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};