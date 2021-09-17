import React from 'react';
import {View, Text, Image,  StyleSheet, Dimensions} from 'react-native';
import phone from '../assets/phone.jpg';
import { blue } from '../constants/CustomColors';

const PhoneDisplay = () => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={phone} resizeMode="contain" style={styles.phoneImage}/>
        <Text style={styles.phoneName}>Pixel XL 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  phoneImage: {
    width: Dimensions.get('window').width,
    height: 450
  },
  phoneName: {
    color: blue,
    fontSize: 30
  }
});


export default PhoneDisplay;
