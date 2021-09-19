import React from 'react';
import { View ,Text, StyleSheet, StatusBar } from "react-native";
import Header from '../Header';
import Constants from 'expo-constants';
import {white} from '../../constants/CustomColors';


const Bids = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Header/> 
      <Text>Bids</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: white,
    padding: 8,
  },
});



export default Bids;