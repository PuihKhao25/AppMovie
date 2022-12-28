import React, {useContext, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
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
  const {isLoading,Register} = useContext(AuthContext);
  return (
    <Background>
      <Spinner visible={isLoading} />
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: '#151C26',
            height: 700,
            width: 405,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
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
              LableBtn={'SignUp'}
              bgColor={darkGreen}
              onPress={() => {
                Register(ho_ten, email, so_dt, mat_khau,setHo_ten);
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
