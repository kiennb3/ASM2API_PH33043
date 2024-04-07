import React from 'react';
import { ScrollView } from 'react-native';
import Banner from './component/Banner';
import HotProducts from './component/SPhot';
import NewProducts from './component/NewSP';

const MainScreen = () => {
  return (
    
      <ScrollView>
        <Banner />
        <NewProducts />
        <HotProducts />
      
      </ScrollView>
     
  );
};

export default MainScreen;
