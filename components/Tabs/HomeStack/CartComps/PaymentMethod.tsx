import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import visa from '../../../../assets/creditCards/visa.png';
import mastercard from '../../../../assets/creditCards/mastercard.png';
import discover from '../../../../assets/creditCards/discover.svg';
import amex from '../../../../assets/creditCards/amex.png';



const PaymentMethod = () => {

  return (
    <View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={visa} resizeMode="contain" style={styles.image}/>
          <Image source={amex} resizeMode="contain" style={styles.image}/>
          <Image source={mastercard} resizeMode="contain" style={styles.image}/>
          <Image source={discover} resizeMode="contain" style={styles.image}/>
        </View>

        <View>
        
          <View style={{flexDirection: 'row', margin: 10}}>
            <TextInput placeholder="Card Number" style={styles.bigInput} />
            <TextInput placeholder="Exp" style={styles.smallInput} />
          </View>


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 45
  },
  bigInput: {
    width: '80%',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 10
  },
  smallInput: {
    width: '20%',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 10
  }
});

export default PaymentMethod;