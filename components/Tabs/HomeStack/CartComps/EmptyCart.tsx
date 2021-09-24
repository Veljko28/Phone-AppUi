import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import image from '../../../../assets/empty_cart.svg';
import { blue } from '../../../../constants/CustomColors';


const EmptyCart = () => {

  return (
    <View style={{alignItems: "center"}}>
        <Image source={image} resizeMode="contain" style={styles.imageSize} />
        <Text style={styles.title}>Your cart is empty!</Text>
        
        <Text style={styles.subText}>Go to the phones page</Text>
        <Text style={styles.subText}>and find a phone you like!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageSize: {
    width: Dimensions.get('window').width - 50,
    height: 250,
    marginTop: 25,
  },
  title: {
    color: blue,
    fontSize: 25,
  },
  subText: {
    color: '#999',
    fontSize: 18
  }
});

export default EmptyCart;