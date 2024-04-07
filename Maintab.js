import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './Main'
import Caidat from './Caidat'
import Chitiet from './Chitiet'
import CartScreen from './CartScreen'

const Tab = createBottomTabNavigator();
const Maintab = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
          tabBarVisible: false,
          headerShown: false,
          tabBarActiveTintColor: '#D17842', // Màu của tab đang được chọn
          tabBarStyle: {
            backgroundColor: '#B2EBF2', // Màu nền của thanh tab
            borderTopWidth: 0, 
              // Ẩn đường line ở trên tab
          },
        }}
        
      >
        <Tab.Screen
          name="Trangchu"
          component={Main}
          options={{
            headerShown:false,
            tabBarLabel:'', // Ẩn tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./home.png')}
                style={{ width: 19, height: 19, tintColor: color,marginTop:12}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chitiet"
          component={Chitiet}
          options={{
            tabBarLabel: '', // Ẩn tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./gio.png')}
                style={{ width: 19, height: 19, tintColor: color,marginTop:12}}
              />
            ),
          }}
        />
            <Tab.Screen
          name="Giohang"
          component={CartScreen}
          options={{
            tabBarLabel: '', // Ẩn tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./gio.png')}
                style={{ width: 19, height: 19, tintColor: color,marginTop:12}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Caidat"
          component={Caidat}
          options={{
            tabBarLabel: '', // Ẩn tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./heart.png')}
                style={{ width: 19, height: 19, tintColor: color,marginTop:12}}
              />
            ),
          }}
        />
        
       
      </Tab.Navigator>
    )
}

export default Maintab

const styles = StyleSheet.create({})