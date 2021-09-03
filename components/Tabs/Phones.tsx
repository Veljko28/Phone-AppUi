import React from 'react';
import { View ,Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import Header from '../Header';
import {white, blue} from '../../constants/CustomColors';
import PhoneCard from '../PhoneCard';

const Phones = () => {

  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Phones</Text>
      <View style={styles.cardsContainer}>
        <PhoneCard/>
        <PhoneCard/>
        <PhoneCard/>
      </View>
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

export default Phones;