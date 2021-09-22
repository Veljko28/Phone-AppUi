import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { CartForm } from '../../../../constants/CustomTypes';
import { useSelector } from 'react-redux';
import { State } from '../../../../redux/reduxTypes';
import { green } from '../../../../constants/CustomColors';


const OrderSummary = ({total} : {total: number}) => {

  const form = useSelector((state: State) => state.cart.form);

  return (
    <ScrollView>

      <View style={{margin: 20}}>
        <Text style={styles.text}>Order Date:</Text>
        <Text style={styles.subtext}>{new Date().toLocaleString('en-GB')}</Text>
      </View>

      <View style={{margin: 20}}>
        <Text style={styles.text}>Order Number:</Text>
        <Text style={styles.subtext}>{uuidv4().replace(/-/g,"").slice(0,15)}</Text>
      </View>

      
      <View style={{margin: 20}}>
        <Text style={styles.text}>Delivery Address:</Text>
        <Text style={styles.subtext}>{form.address} / {form.town} {form.postCode}</Text>
      </View>

      <View style={{margin: 20}}>
        <Text style={styles.text}>Full Name:</Text>
        <Text style={styles.subtext}>{form.firstName} {form.lastName}</Text>
      </View>

      <View style={{margin: 20}}>
        <Text style={styles.text}>Total Price:</Text>
        <Text style={styles.price}>{total}$</Text>
      </View>
      
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 20,
  },
  subtext: {
    color: '#999',
    fontSize: 17
  },
  price: {
    color: green,
    fontSize: 18
  }
});

export default OrderSummary;