import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';
import {blue} from '../constants/CustomColors';

const Header = ({navigate} : {navigate: any}) => {

  return (
    <View style={styles.headerContainer}>
      <Image source={logo} resizeMode="contain" style={styles.logoStyles}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyles} onPress={() => navigate("Search")}>
          <Ionicons name="search" size={18} color={blue}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyles} onPress={() => navigate("Cart")}>
          <Ionicons name="cart" size={18} color={blue}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  logoStyles: {
    width: 110,
    height: 40,
    marginTop: 10,
    marginLeft: 10
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonStyles: {
    marginRight: 15
  }
})

export default Header;
