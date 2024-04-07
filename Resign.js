import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'

const Resign = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const themApi = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Không được để trống thông tin')
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Mật khẩu không khớp !');
      return;
    }
    if (password.length <=5 ) {
      Alert.alert('Error', 'Mật khẩu phải có ít nhất 6 kí tự !');
      return;
    }

    let objSP = { name: name, email: email, password: password };
    let url_api = 'http://192.168.1.101:3000/login';

    fetch(url_api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objSP)
    }).then((res) => {
      if (res.status == 201) {
        alert('Đăng ký thành công')
        navigation.navigate('Login');
      }
    }).catch((ex) => { 
      console.log(ex);
    })
  }
  const handleRegister = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.wel}>Atel Mart !!</Text>
      <Text style={styles.lo}>Register to Continue</Text>

      <TextInput
        style={styles.input}
        placeholder='Nhập tên'
        placeholderTextColor={'#828282'}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Nhập Email'
        placeholderTextColor={'#828282'}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Nhập Passwword'
        placeholderTextColor={'#828282'}
        onChangeText={(text) => setPassWord(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Nhập Passwword 2'
        secureTextEntry
        value={confirmPassword}
        placeholderTextColor={'#828282'}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={themApi}>
<Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.resetText} onPress={handleRegister} >
        You have an account? Click-<Text style={styles.boldText}>Sign In</Text>
      </Text>
    </View>
  )
}

export default Resign

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2EBF2',
    margin:20,
    borderRadius:10,
    borderRadius:10,
    shadowColor:'red',
    shadowOffset: {
      width: 2,
      height: 2,
  },
  shadowOpacity: 5,
  shadowRadius: 10,
  elevation: 15,

  },
  buttonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },
  image: { width: 150, height: 150 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  resetText: { color: '#828282', fontSize: 13, marginTop: 10, },
  button: {
    backgroundColor: '#D17842',
    padding: 10,
    margin: 10,
    color: '#252A32',
    width: 300,
    height:50,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center', 
  },
  input: {
    borderColor: '#252A32',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: 'black',
    width: 300,
    borderRadius: 7,
    backgroundColor:'#fff'
  },
  boldText: { fontWeight: 'bold', color:'#D17842', },
  wel: { color: 'green', fontSize: 25, marginBottom: 10,fontWeight:'bold' },
  lo: { color: 'red', fontSize: 13, marginBottom: 20 },
})