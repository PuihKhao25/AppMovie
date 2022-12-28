import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Styles from '../Styles';
import Home from '../Home';
import Profile from './Profile';
import {AuthContext} from '../Constants/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const {logout} = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View style={Styles.sectionBg}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#151C26',
          padding: 20,
        }}
        onPress={handleLogout}>
        <View style={{}}>
          <Text style={{color: 'white'}}>
            <Icon name="log-out-outline" color={'white'} size={25} />
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#151C26',
          elevation: 0,
          shadowOpacity: 0,
        },
        drawerInactiveTintColor: 'white',
        headerTintColor: 'white',
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        component={Home}
        name="Home"
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="home" color={'white'} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        component={Profile}
        name="Profile"
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="people" color={'white'} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
