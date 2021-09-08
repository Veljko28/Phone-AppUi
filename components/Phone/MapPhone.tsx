import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Phone } from '../../constants/CustomTypes';
import {green, blue} from '../../constants/CustomColors';

const MapPhone = (props: Phone) => {

  const desc = props.description.slice(0,20);

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View><Image source={props.image} style={styles.imageStlyes}/></View>

      <View>
         <Text style={{color: blue}}>{props.name}</Text>
         <Text style={{color: '#999'}}>{desc}...</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Text style={styles.priceStyles}>Price: {props.price}$</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    padding: 5,
    borderBottomColor: '#eee',
    borderBottomWidth: 2
  },
  priceStyles: {
    color: green
  },
  imageStlyes: {
    width: 35,
    height: 35
  }
})

export default MapPhone;