import React from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Header from '../Header';
import {white} from '../../constants/CustomColors';
import PhoneCard from '../PhoneCard';
import CategoryCircles from '../FrontPage/CategoryCircles';
import CarouselMain from '../FrontPage/CarouselMain';
import {useSelector} from 'react-redux';
import {State} from '../../redux/reduxTypes';



const Home = () => {

  return (
    <View style={styles.container}>
      <Header/> 
      <CategoryCircles/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});

export default Home;