import React,{useState,useEffect,useContext} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import Styles from '../Styles';
import { AuthContext } from '../Constants/AuthContext';

const Profile = () => {
  const {userInfo,profile,getProfileUser}= useContext(AuthContext)
  const id = userInfo.data.tai_khoan;
  console.log('profile',profile);
  useEffect(() => {
    getProfileUser(id)
  })
  return (
    <View><Text style={{color:'red'}}>kk {profile.data.email}</Text></View>
  )
  
};

export default Profile;
