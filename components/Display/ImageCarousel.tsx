import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import Constants from 'expo-constants';


const width = Dimensions.get('window').width;

const ImageCarousel = () => {

  const images = ["https://cdn.techjuice.pk/wp-content/uploads/2017/09/Google-Pixel-2-XL-Techjuice.png",
  "https://wirelesswarehouse.ca/wp-content/uploads/2019/08/s-l1600.jpg",
  "https://bigmag.ua/image/cache/catalog/archive/data/catalog/product/704/24/product_image_9924_39511-650x540.jpeg"];


  return (
    <View style={styles.conatiner}>
      <ScrollView horizontal pagingEnabled style={styles.scrollStyles} showsHorizontalScrollIndicator={false} >
        {images.map((item, idx) => (
          <Image key={idx} source={{uri: item}} style={styles.scrollStyles} resizeMode="contain"/>
        ))}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  conatiner: {
    margin: 20,
    width,
    height: 350,
    backgroundColor: '#fff',
  },
  scrollStyles: {
    width,
    height: 350
  },
});

export default ImageCarousel;