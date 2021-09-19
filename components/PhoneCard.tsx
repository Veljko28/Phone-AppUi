import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import phone from '../assets/phone.jpg';
import { blue, green } from '../constants/CustomColors';
import { Ionicons } from '@expo/vector-icons';


const PhoneCard = ({onPress} : {onPress : () => any}) => {

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => onPress()}>
      <Image source={phone} resizeMode="contain" style={styles.phoneImage}/>
      <Text style={{marginTop: 5, color: blue, textAlign: 'center'}}>Pixel 2</Text>
      <Text style={{marginTop: 5, color: green, textAlign: 'center'}}>350$</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity activeOpacity={0.6}
         style={styles.wishListButton}>
            <Ionicons name="heart" color="white" size={15}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}
         style={styles.cartButton}>
            <Ionicons name="cart" color="white" size={15}/>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 150,
    border: "2px solid #eee",
    paddingTop: 10,
    textAlign: 'center',
    margin: 2
  },
  phoneImage: {
    width: 100,
    height: 50
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  wishListButton: {
    borderRadius: 50,
    backgroundColor: 'red',
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  cartButton: {
    borderRadius: 50,
    backgroundColor: blue,
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  }
})

export default PhoneCard;
