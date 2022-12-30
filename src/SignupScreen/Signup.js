import React, {useContext, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import {AuthContext} from '../Constants/AuthContext';
import BtnLogin from '../Components/BtnLogin';
import Background from '../Constants/Background';
import {darkGreen} from '../Constants/Colors';
import Field from '../Constants/Field';
import Styles from '../Styles';
import Spinner from 'react-native-loading-spinner-overlay';

const Signup = ({navigation}) => {
  const [ho_ten, setHo_ten] = useState('');
  const [email, setEmail] = useState('');
  const [so_dt, setSo_dt] = useState('');
  const [mat_khau, setMat_khau] = useState('');
  const {isLoading, Register} = useContext(AuthContext);
  return (
    <View style={{backgroundColor: '#041b2d'}}>
      <Spinner visible={isLoading} />
      <View style={{alignItems: 'center', width: 400}}>
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
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: 50,
            }}>
            Đăng Ký Thành Viên
          </Text>
          <Field
            placeholder="Nhập Họ Tên"
            keyboardType="ho_ten"
            value={ho_ten}
            onChangeText={text => setHo_ten(text)}
          />
          <Field
            placeholder="Nhập Email"
            keyboardType="email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Field
            placeholder="Nhập Số Điện Thoại"
            keyboardType={'so_dt'}
            value={so_dt}
            onChangeText={text => setSo_dt(text)}
          />
          <Field
            placeholder="Mật Khẩu "
            secureTextEntry={true}
            keyboardType={'mat_khau'}
            value={mat_khau}
            onChangeText={text => setMat_khau(text)}
          />
          <View style={{marginTop: 20}}>
            <BtnLogin
              LableBtn={'Đăng Ký'}
              bgColor='#f47326'
              onPress={() => {
                Register(ho_ten, email, so_dt, mat_khau, setHo_ten);
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold',color:'#fff'}}>
                Bạn đã có tài khoản ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{color: '#f47326', fontWeight: 'bold', fontSize: 14, marginLeft:5}}>
                  Quay lại đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
