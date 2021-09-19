import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { blue, white } from '../constants/CustomColors';
import logo from '../assets/logo.png';
import {ProgressBar} from 'react-native-paper';

const Loading = () => {

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Image source={logo} resizeMode="contain" style={styles.logoStyles}/>
        <ProgressBar style={{margin: 5, width: 200}} color={blue} indeterminate />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyles: {
    width: 200,
    height: 75,
    marginTop: 10,
    marginLeft: 10
  },
});


export default Loading;