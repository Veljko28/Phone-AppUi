import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";

import visa from '../../../../assets/creditCards/visa.png';
import mastercard from '../../../../assets/creditCards/mastercard.png';
import discover from '../../../../assets/creditCards/discover.svg';
import amex from '../../../../assets/creditCards/amex.png';



const PaymentMethod = () => {

  const [form, changeForm] = React.useState({
    num: "",
    exp: "",
    holder: "",
    cvc: ""
  });

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
           <MaskedTextInput
              mask="9999 9999 9999 9999"
              onChangeText={(text, rawText) => {
                changeForm({...form, num: rawText})
              }}
              style={styles.bigInput}
              keyboardType="numeric"
              placeholder="Card Number"
            />
            <MaskedTextInput
              mask="99 / 99"
              onChangeText={(text, rawText) => {
                changeForm({...form, exp: rawText})
              }}
              style={styles.smallInput}
              keyboardType="numeric"
              placeholder="Expiry"
            />
          </View>

              <View style={{flexDirection: 'row', margin: 10}}>
            <TextInput placeholder="Card Holder" style={styles.bigInput} />
            <MaskedTextInput
              mask="999"
              onChangeText={(text, rawText) => {
                changeForm({...form, exp: rawText})
              }}
              style={styles.smallInput}
              keyboardType="numeric"
              placeholder="Cvc"
            />
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
    width: '70%',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 10
  },
  smallInput: {
    width: '30%',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 10
  }
});

export default PaymentMethod;