import React from 'react';
import {View, Text,  StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import Header from '../../Header';
import {white} from '../../../constants/CustomColors';
import PhoneCard from '../../PhoneCard';
import CategoryCircles from '../../FrontPage/CategoryCircles';
import CarouselMain from '../../FrontPage/CarouselMain';

const FrontPage = ({ navigation } : { navigation: any}) => {
   return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header navigate={(x: string) => navigation.navigate(x)}/> 
      <CategoryCircles/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: white,
  },
});

export default FrontPage;