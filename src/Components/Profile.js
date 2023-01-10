import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import Styles from '../Styles';
import {AuthContext} from '../Constants/AuthContext';

const Profile = () => {
  const {userInfo, profile, getProfileUser} = useContext(AuthContext);
  const id = userInfo.content.taiKhoan;
  const maLoaiNguoiDung = userInfo.content.maLoaiNguoiDung;
  const hoTen = userInfo.content.hoTen;
  const email = userInfo.content.email;
  const soDt = userInfo.content.soDt;
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState();
  const handleChangeInfomation = event => {
    setModalVisible(true);
    setName(event.text);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundInfo}>
          <Text style={styles.titleColor}>tai khoản : {id}</Text>
          <Text style={styles.titleColor}>Họ tên : {hoTen}</Text>
          <Text style={styles.titleColor}>Email : {email} </Text>
          <Text style={styles.titleColor}> Số điện thoại: {soDt} </Text>
          <Text style={styles.titleColor}>
            Mã loại người dùng : {maLoaiNguoiDung}
          </Text>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <TextInput
                  onChangeText={text => handleChangeInfomation(text)}
                  defaultValue={name}
                  editable={true}
                  multiline={false}
                />
                <View style={styles.buttonModal}>
                  <Pressable
                    style={[styles.button, styles.buttonSave]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Lưu</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Đóng</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Sửa thông tin</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151C26',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'yellow',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
    width: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 80,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonSave: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  titleColor: {
    color: '#fff',
  },
  buttonModal: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 200,
  },
  backgroundInfo: {
    height: 130,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
});

export default Profile;
