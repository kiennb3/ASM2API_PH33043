import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chao from './Chao';
import Login from './Login';
import Resign from './Resign';
import Main from './Main';
import Chitiet from './Chitiet';
import Caidat from './Caidat';
import Maintab from './Maintab';
import CartScreen from './CartScreen';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Chao' component={Chao} />
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Resign' component={Resign}/>
      <Stack.Screen name='Maintab'component={Maintab}/>
      <Stack.Screen name='Trangchu' component={Main}/>
      <Stack.Screen name='Chitiet' component={Chitiet}/>
      <Stack.Screen name='Giohang' component={CartScreen}/>
      <Stack.Screen name='Caidat' component={Caidat}/>
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
