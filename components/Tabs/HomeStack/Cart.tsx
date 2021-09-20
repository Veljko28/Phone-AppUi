import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import image from '../../../assets/phone.jpg';

import {blue, white} from '../../../constants/CustomColors';

const Cart = ({navigation, changeRemoveTabsOnSearch} : {navigation: any, changeRemoveTabsOnSearch: any}) => {

 React.useEffect( () => {
    changeRemoveTabsOnSearch(true);
  }, [])

  const itemsInCart = [
    {image, name: "Pixel 2 XL", price: 350},
    {image, name: "Pixel 2 XL", price: 350},
    {image, name: "Pixel 2 XL", price: 350},
  ]

  return (
    <View style={styles.container}> 
    
       <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => {  changeRemoveTabsOnSearch(false);                             navigation.navigate("Home") }} style={{marginTop: 10}} >
          <MaterialIcons name="arrow-back" size={20} color={blue} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Cart</Text>
        </View>
        <View> </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 0,
    marginTop: Constants.statusBarHeight
  },
  title: {
    color: blue,
    fontSize: 25,
  }
});

export default Cart;