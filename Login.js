import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #0C0F14;
`;
const Login = () => {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const navigation = useNavigation();

  const toogleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }
  const hanldeLogin = () => {
    if (!isValidaEmail(email)) {
      alert('Vui lòng nhập đúng email')
      return;
    }
    if (isValidaPassWord(passWord)) {
      alert('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }
    navigation.navigate('Maintab');
  }
  const hanldeGoogle=()=>{
    console.log("Sign in with Google clicked");
  }
  
  const hanldeResign=()=>{
   navigation.navigate('Resign')
  }
  
  const isValidaEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const isValidaPassWord = (passWord) => {
    return passWord.length <= 5;
  }  
  return (
    <View style={styles.container}>
           
           <Text style={styles.txt}>Login AtelMart</Text>
           <Text style={styles.txt1}>Hãy đăng nhập và mua sắm</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <View style={styles.pass}>
        <TextInput
          style={styles.input1}
          placeholder='Nhập PassWord'
          value={passWord}
          onChangeText={setPassWord}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={toogleSecureEntry} style={styles.eyeIcon}>
       <MaterialIcons name={secureTextEntry ?'visibility': 'visibility-off'} size={24} color='black' />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.login} onPress={hanldeLogin}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
      <View style={styles.button1} >
        <Image source={require('./google_icon.png')} style={styles.logogoogle}/>
        <Text style={styles.ggtext} onPress={hanldeGoogle}>Sign in with Google</Text>
      </View>
      <Text style={styles.resign} onPress={hanldeResign} >
      Don’t have account? Click-<Text style={styles.blodetext}>Register</Text>
      </Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'#B2EBF2',
    margin:20,
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
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor:'#fff'
  },
  input1: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor:'#fff'
  },
  pass: {
    
  }
  , btnpass: {
    marginLeft: 10
  }, login: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  }, btn: {
    color: '#fff',
    fontSize: 15
  },  eyeIcon: {
    position: 'absolute',
    right: 10,
    paddingVertical: 13,
  },
  txt:{
    color: 'green', fontSize: 25, marginBottom: 10,fontWeight:"bold"
  },txt1:{
    color: '#828282', fontSize: 13, marginBottom: 20
  },button1:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'center',  
    padding: 10,
    color: '#252A32',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    borderWidth:0.5
  },logogoogle:{
    width: 20, height: 20, marginRight: 50
  },ggtext:{
    color: '#252A32', fontSize: 16,fontWeight: 'bold', marginRight:60
  },resign:{
    color: '#828282', fontSize: 13, marginTop: 20,margin: 10
  },blodetext:{
    fontWeight: 'bold', color:'#D17842'
  }


})