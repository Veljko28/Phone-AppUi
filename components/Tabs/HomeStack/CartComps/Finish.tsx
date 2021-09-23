import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { green, blue } from '../../../../constants/CustomColors';

const Finish = () => {

  return (
    <View style={{alignItems: 'center'}}>
        <Ionicons name="checkmark-circle" size={150} color={green} />
        <Text style={styles.title}>Order Successful!</Text>
        <Text style={styles.subText}>You have successfully finished the ordered!</Text>
        <Text style={styles.subText}>Wait for the seller to contact</Text>
        <Text style={styles.subText}> you about the shipping.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: blue,
    fontSize: 25,
    marginBottom: 15
  },
  subText: {
    color: '#999',
    fontSize: 15
  }
});

export default Finish;