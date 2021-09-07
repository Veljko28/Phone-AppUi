import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import image1 from '../../assets/slider/slider1.jpg';
import image2 from '../../assets/slider/slider2.jpg';
import image3 from '../../assets/slider/slider3.jpg';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../assets/slider/animations';

 

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4)
 
const images = [image1, image2, image3];


 
const CarouselMain = () => {


  const sliderItem = (image: any) => {

    return (
      <View>
        <Image source={image}/>
      </View>
    );
  }
 
    return (
            <View style={styles.container}>
               <Carousel  
                layout={'stack'}
                data={images}
                renderItem={sliderItem}
                sliderWidth={ITEM_WIDTH + 60}
                itemWidth={ITEM_WIDTH + 20}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                firstItem={1} 
              />
            </View>
        );
}

export default CarouselMain;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});