import React,{useState,useEffect} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import Styles from '../Styles';

const Profile = () => {
  const [user,setUser] = useState([]);
  // useEffect(() => {
  //   async function getProfileUser() {
  //     const res = await axios.get(API_URL + 'api/v1/auth/user/');
  //     return res;
  //   }
  //   getProfileUser().then(response => {
  //     const result = response?.data;
  //     setUser(result?.data);
  //   });
  // }, []);
  console.log(user);
  return (
    <>
      <View style={Styles.sectionBg}>
        
      {/* <Text style={Styles.heading}>Liên hệ</Text> */}
      <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
        <TextInput style={{
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            paddingHorizontal: 14,
          }}
          placeholder="useless placeholder"
          />
        <Text>● Số ĐT: 0899367709</Text>
      </View>
      </View>
    </>
  );
};

export default Profile;
