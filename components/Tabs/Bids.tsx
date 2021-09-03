import React from 'react';
import { View ,Text, StyleSheet } from "react-native";
import Header from '../Header';
import Constants from 'expo-constants';
import {white} from '../../constants/CustomColors';


const Bids = () => {

  return (
    <View style={styles.container}>
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