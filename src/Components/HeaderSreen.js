import React from 'react';
import {Button, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Header} from '@rneui/themed';

export default function HeaderSreen({
  title,
  iconLeft = false,
  onIconLeft = () => {},
  style,
}) {
  return (
    <>
      <View
        style={{ backgroundColor: '#151C26', height: 50}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '45%'}}>
            {iconLeft && (
              <TouchableOpacity onPress={onIconLeft}>
                <Icon name="chevron-small-left" color={'white'} size={35} />
              </TouchableOpacity>
            )}
          </View>
          <View style={{width: '55%'}}>
            <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
          </View>
        </View>
      </View>
    </>
  );
}