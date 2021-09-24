import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Phone} from '../../../../constants/CustomTypes'
import { blue, green, white } from '../../../../constants/CustomColors';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../redux/actions/cartActions';



const CartItemMapping = ({x, removeFromCart} : {x: Phone, removeFromCart: (id: number | string) => any}) => {

  return (
    <View style={styles.container}>
      <Image source={x.image} style={styles.image} />
      <View>
        <Text style={styles.name}>{x.name}</Text>
        <Text style={styles.price}>{x.price}</Text>

        <View style={styles.buttonContainer}>
        
              <TouchableOpacity activeOpacity={0.8} onPress={() => removeFromCart(x.id)}>
                <MaterialIcons
                  name="clear"
                  style={{ color: white, backgroundColor: 'red', marginTop: 5, marginRight: 5, borderRadius: 10}}
                  size={20}
                />
              </TouchableOpacity>
                <MaterialIcons
                  name="arrow-forward"
                  style={{ color: white, backgroundColor: blue, marginTop: 5, borderRadius: 10}}
                  size={20}
                />
        </View>

      </View>
    </View>
  )
}


const CartItemMap = ({itemsInCart} : {itemsInCart: Phone[]}) => {

  const dispatch = useDispatch();
  console.log(itemsInCart);
  return (
     <ScrollView>
        {itemsInCart.map(x => <CartItemMapping x={x} removeFromCart={(id: number | string) => dispatch(removeFromCart(id))} />)}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 30,
    paddingBottom: 15,
    borderColor: '#eee',
    borderBottomWidth: 2
  },
  image: {
    width: 75,
    height: 75
  },
  name: {
    fontSize: 20,
    color: blue
  },
  price: {
    fontSize: 18,
    color: green
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})

export default CartItemMap;