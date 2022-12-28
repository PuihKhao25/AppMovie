import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../LoginScreen/Login';
import Signup from '../SignupScreen/Signup';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    
<Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Signup} />
    </Stack.Navigator>
  
    
  );
};

