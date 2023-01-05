import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Styles from '../Styles';
import {color} from 'react-native-reanimated';

const BookTickets = () => {
  return (
    <View>
      <ScrollView style={Styles.sectionBg}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 15,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
              borderColor:'blue'
            }}
            onPress={() => {
              alert('You tapped the button!');
            }}
            >
            <Text style={{color: 'white', textAlign: 'center'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>10</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookTickets;

const styles = StyleSheet.create({});
