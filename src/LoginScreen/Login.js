import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import Background from '../Constants/Background';
import {darkGreen} from '../Constants/Colors';
import Field from '../Constants/Field';
import {AuthContext} from '../Constants/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


const Login = ({navigation}) => {
 
  const [ho_ten, setHo_ten] = useState(null);
  const [mat_khau, setMat_khau] = useState('');
  const {isLoading, login} = useContext(AuthContext);

  return (
    <Background>
      <Spinner visible={isLoading} />
      <View style={{alignItems: 'center', width: 405}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#151C26',
          height: 700,
          width: 405,
          borderTopLeftRadius: 130,
          paddingTop: 85,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login to your account
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
          keyboardType={'ho_ten'}
          value={ho_ten}
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
          value={mat_khau}
          onChangeText={text => setMat_khau(text)}
          secureTextEntry={true}
        />
        <View
          style={{
            alignItems: 'flex-end',
            width: '78%',
            paddingRight: 16,
            marginBottom: 200,
          }}>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Forgot Password ?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#006A42',
            borderRadius: 100,
            alignItems: 'center',
            width: 300,
            paddingVertical: 5,
            marginVertical: 10,
          }}
          onPress={() => {
            login(ho_ten, mat_khau);
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, color: darkGreen}}>
            Don't have an account ?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;
