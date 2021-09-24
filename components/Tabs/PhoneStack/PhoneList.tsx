import React from 'react';
import { View ,Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from "react-native";
import Constants from 'expo-constants';
import Header from '../../Header';
import {white, blue} from '../../../constants/CustomColors';
import PhoneCard from '../../PhoneCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import image from '../../../assets/phone.jpg';
import { Phone } from '../../../constants/CustomTypes';
import { State } from '../../../redux/reduxTypes';

const PhoneList = ({navigation} : {navigation: any}) => {

 const list = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  const dispatch = useDispatch();
  const cartItems = useSelector((state: State) => state.cart.cartItems);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Header navigate={(x: string) => navigation.navigate(x)}/>
      <Text style={styles.title}>Phones</Text>
      {list.map((x,idx) => {
        return (
          <View key={idx} style={styles.cardsContainer}>
            {x.map(y => <PhoneCard inCart={cartItems.filter((x: Phone) => x.id === y).length > 0}
             onPress={() => navigation.navigate("Display", {id: y})} phone={{id: y, name: "Pixel 2 XL", image, price: "350$"}} 
             addToCart={(phone: Phone) => dispatch(addToCart(phone))}
             removeFromCart={(id: number | string) => dispatch(removeFromCart(id))}
             /> 
              )}
          </View>
        )
      })}
      <View style={styles.cardsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.pageButton}>
            <Text style={{color: white}}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.pageButton}>
            <Text style={{color: white}}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.pageButton}>
            <Text style={{color: white}}>3</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    width:  Dimensions.get('window').width,
    backgroundColor: white,
    padding: 8,
  },
  title: {
    textAlign: 'center',
    color: blue,
    fontSize: 20,
    marginTop: 10
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pageButton: {
    backgroundColor: blue,
    color: white,
    width: 50,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    textAlign: 'center'
  }
});

export default PhoneList;