import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'



const Chao = ({navigation}) => {
  useEffect(()=>{
    const timer= setTimeout(()=>{
      navigation.navigate('Login')
    },3000);
    return ()=>clearTimeout(timer)
  })
  return (
    <View style={styles.container}>
       <Text style={styles.txt1}>WELCOME TO ATEL</Text>
    <Image style={styles.image} source={{uri:'https://vn-live-01.slatic.net/p/fd72711a1641571e8684323b2bf873bd.jpg'}} />
    <Text style={styles.txt}>Đỗ Trung Kiên</Text>
    <Text style={styles.txt2}>PH33043</Text>
    </View>
  )
}

export default Chao

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:20,
    alignItems:"center",
    backgroundColor:'#FFF',
    justifyContent: 'center',
    shadowColor:'#00E5FF',
    shadowOffset:{
      width:2,
      height:2
    },
    shadowOpacity:1,
    shadowRadius:8,
    elevation:10,
    borderRadius:10,
    backgroundColor:'#F8BBD0'
  },
  image:{
    width:200,
    height:200,
    marginBottom:20
  },
  txt:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  txt1:{
    fontSize:25,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#00C853',
    marginBottom:50
  },
  txt2:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'green'
  }
})