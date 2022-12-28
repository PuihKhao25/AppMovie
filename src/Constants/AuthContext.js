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
  const login = (ho_ten, mat_khau) => {
    setIsLoading(true);
    axios
      .post(`${API_URL}/api/v1/auth/login`, {
        ho_ten,
        mat_khau,
      })
      .then(res => {
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

  const Register = (ho_ten, email, so_dt, mat_khau,setHo_ten) =>{
    setIsLoading(true);

    axios
      .post(`${API_URL}/api/v1/auth/register`, {
        ho_ten, email, so_dt, mat_khau
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

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        logout,
        Register,
      }}>
      {children}
    </AuthContext.Provider>
  );
};