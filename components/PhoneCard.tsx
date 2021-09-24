import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import image from '../assets/phone.jpg';
import { blue, green } from '../constants/CustomColors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Phone } from '../constants/CustomTypes';


const PhoneCard = ({onPress, addToCart, removeFromCart, phone, inCart} : {onPress : () => any, addToCart: (phone: Phone) => any, 
removeFromCart: (id: number | string) => any, phone: Phone, inCart: boolean}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
        <Image source={image} resizeMode="contain" style={styles.phoneImage}/>
        <Text style={{marginTop: 5, color: blue, textAlign: 'center'}}>{phone?.name}</Text>
        <Text style={{marginTop: 5, color: green, textAlign: 'center'}}>{phone?.price}</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>

        <TouchableOpacity activeOpacity={0.6}
         style={styles.wishListButton}>
            <Ionicons name="heart-outline" color="white" size={15}/>
        </TouchableOpacity>

        {inCart ? (
        <TouchableOpacity activeOpacity={0.8} onPress={() => removeFromCart(phone.id)}
         style={styles.cartButton}>
            <MaterialCommunityIcons name="cart-off" size={15} color="white" />
        </TouchableOpacity>
        ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={() => addToCart(phone)}
         style={styles.cartButton}>
            <Ionicons name="cart" color="white" size={15}/>
        </TouchableOpacity>
        )}

      </View>

    </View>
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
