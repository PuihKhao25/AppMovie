import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../src/Constants/AuthContext';
import 'react-native-gesture-handler';
import DrawerNavigator from '../src/Components/DrawerNaviagtor';

import DetailMovies from '../src/Components/DetailMovies';
import BookTickets from '../src/Components/BookTickets';
import EditProfile from '../src/Components/EditProfile';
import Profile from '../src/Components/Profile';

import {AuthStack} from '../src/Components/AuthStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {isLoading, userInfo} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userInfo !== null ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="DetailMovies" component={DetailMovies} />
          <Stack.Screen name="BookTickets" component={BookTickets} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default RootStack;
