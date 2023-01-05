import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Background from '../Constants/Background';
import {darkGreen} from '../Constants/Colors';
import Field from '../Constants/Field';
import {AuthContext} from '../Constants/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({navigation}) => {
  const [hoTen, setHo_ten] = useState(null);
  const [matKhau, setMat_khau] = useState('');
  const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={{backgroundColor: '#041b2d'}}>
      <Spinner visible={isLoading} />
      <View style={{alignItems: 'center', width: 405}}>
        <Image
          style={{width: 150, height: 150, marginTop: 50}}
          source={require('../assets/logomovie.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: '#041b2d',
          height: 700,
          width: 405,
          borderTopLeftRadius: 130,
          paddingTop: 85,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 50,
          }}>
          Đăng Nhập Thành Viên
        </Text>

        <Field
          style={{
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            paddingHorizontal: 14,
          }}
          placeholder="Nhập họ tên"
          keyboardType={'hoTen'}
          value={hoTen}
          onChangeText={text => setHo_ten(text)}
        />
        <Field
          style={{
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            paddingHorizontal: 14,
          }}
          placeholder="Nhập mật Khẩu"
          value={matKhau}
          onChangeText={text => setMat_khau(text)}
          secureTextEntry={true}
        />
        <View
          style={{
            alignItems: 'flex-end',
            width: '78%',
            paddingRight: 16,
            marginBottom: 100,
          }}>
          <Text style={{color: '#f47326', fontWeight: 'bold', fontSize: 16}}>
            Quên mật Khẩu ?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#f47326',
            borderRadius: 100,
            alignItems: 'center',
            width: 300,
            paddingVertical: 5,
            marginVertical: 10,
          }}
          onPress={() => {
            login(hoTen, matKhau);
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 13, color: '#ffff'}}>
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: '#f47326',
                fontWeight: 'bold',
                fontSize: 13,
                marginLeft: 5,
              }}>
              Đăng Ký Tài Khoản
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
