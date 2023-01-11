import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import API_URL from '../Services/API';
import {AuthContext} from '../Constants/AuthContext';
import {useNavigation} from '@react-navigation/native';
import HeaderSreen from './HeaderSreen';

export default function EditProfile() {
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  const {taiKhoan} = userInfo.content;
  const [info, setInfo] = useState();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  let config = {
    headers: {
      Authorization: 'Bearer ' + userInfo.content.accessToken,
    },
  };
  const onSubmit = async data => {
    console.log('data', data);
    const newData = {
      ho_ten: data?.ho_ten || hoTen,
      so_dt: data?.so_dt || soDT,
    };
    console.log('newData', newData);
    await axios
      .put(
        `${API_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung/${taiKhoan}`,
        newData,
        config,
      )
      .then(res => navigation.navigate('Profile'));
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
      <HeaderSreen iconLeft onIconLeft={navigation.goBack} title={'Chỉnh sửa thông tin'} />
      <View style={styles.container}>
        <Text style={styles.label}>Họ và tên</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              defaultValue={info?.hoTen}
            />
          )}
          name="ho_ten"
          rules={{required: true}}
        />
        <Text style={styles.label}>Số điện thoại</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              defaultValue={info?.soDT}
            />
          )}
          name="so_dt"
          rules={{required: true}}
        />

        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Lưu"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
