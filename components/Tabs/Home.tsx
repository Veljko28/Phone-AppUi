import React from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Header from '../Header';
import {white} from '../../constants/CustomColors';
import PhoneCard from '../PhoneCard';



const Home = () => {
  return (
    <View style={styles.container}>
      <Header/> 
      <Text>Home Page</Text>
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

export default Home;