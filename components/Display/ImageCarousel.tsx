import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import Constants from 'expo-constants';
import { blue } from '../../constants/CustomColors';


const width = Dimensions.get('window').width;

const ImageCarousel = () => {

  const images = ["https://cdn.techjuice.pk/wp-content/uploads/2017/09/Google-Pixel-2-XL-Techjuice.png",
  "https://wirelesswarehouse.ca/wp-content/uploads/2019/08/s-l1600.jpg",
  "https://bigmag.ua/image/cache/catalog/archive/data/catalog/product/704/24/product_image_9924_39511-650x540.jpeg"];

  const [currentImage, changeCurrentImage] = React.useState(0);

  const changeImage = ({nativeEvent}: any) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide != currentImage){
      changeCurrentImage(slide);
    }
  }

  return (
    <View style={styles.conatiner}>
      <ScrollView horizontal pagingEnabled style={styles.scrollStyles} showsHorizontalScrollIndicator={false} onScroll={changeImage} >
        {images.map((item, idx) => (
          <Image key={idx} source={{uri: item}} style={styles.scrollStyles} resizeMode="contain"/>
        ))}
      </ScrollView>
      <Text style={styles.dots}>
        {images.map((x, idx) => <Text style={{color: idx === currentImage ? blue : "#999"}}>● </Text>)}
      </Text>
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
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15
  }
});

export default ImageCarousel;