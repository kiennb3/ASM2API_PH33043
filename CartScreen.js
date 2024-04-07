import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './component/src/redux/store'
import TodoScreen from './component/src/screens/todoScreen'

const CartScreen = () => {
  return (
    <Provider store={store}>
      <TodoScreen/>
    </Provider>
  )
}

export default CartScreen

const styles = StyleSheet.create({})