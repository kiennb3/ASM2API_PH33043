// Banner.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  'https://dknstore.vn/wp-content/uploads/2022/04/banner-dkn-store-01.jpg',
  'https://www.techone.vn/wp-content/uploads/2023/09/Banner-web_1920x824-4.jpg',
  'https://product.hstatic.net/1000353777/product/upload_4a24e77b3c3e41c3974b03182fea0e5a.jpg',
];

const Banner = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay={true}>
        {images.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    
  },
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Banner;
