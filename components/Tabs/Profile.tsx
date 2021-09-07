import React from 'react';
import Header from '../Header';
import {white, blue} from '../../constants/CustomColors';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, ScrollView} from 'react-native';
import {Avatar, Image} from 'react-native-paper';
import Constants from 'expo-constants';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import userImage from '../../assets/user.png';

import Listings from './ProfileComps/Listings';
import Reviews from './ProfileComps/Reviews';
import WishList from './ProfileComps/WishList';

const Profile = () => {

  const [page,changePage] = React.useState("Listings");

  const pagination = (value: string) => {
    changePage(value);
  }  

  return (
  <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
     <StatusBar barStyle="light-content" />
     <View style={{ backgroundColor: blue, paddingTop: Constants.statusBarHeight}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <IconButton
              icon={() => (
                <Ionicons
                  name="arrow-back"  
                  style={{ color: white }} 
                  size={20}
                />
              )}
              size={30}
            />
          <Text style={styles.userName}>Veljko Admin</Text>
              <IconButton
              icon={() => (
                <Ionicons
                  name="settings-outline"
                  style={{ color: white }}
                  size={20}
                />
              )}
              size={33} 
            /> 
          </View>
          <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>  
             <Avatar.Image size={125} source={userImage} /> 
             <Text style={styles.descriptionText}>Sold: 15</Text>        
             <Text style={styles.descriptionText}>Active Listings: 5</Text> 
             <Text style={styles.descriptionText}>Rating: 5.0 <Ionicons
                  name="star" 
                  style={{ color: '#f9ff00' }} 
                  size={20}
                />
             </Text>
          </View>
     </View>
     <View style={styles.buttonsContainer}>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.button} onPress={e => pagination("Listings")}>Listings</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.button} onPress={e => pagination("Reviews")}>Reviews</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.button} onPress={e => pagination("Wish List")}>Wish List</Text>
        </TouchableOpacity>
        
     </View>

      {page === "Listings" ? <Listings/> : page === "Reviews" ? <Reviews/> : <WishList/>}

    </ScrollView>
  );
}  

const styles = StyleSheet.create({
   userName: {
     marginTop: 13,
     fontSize: 25,
     color: '#fff',
     textAlign: 'center',
   },
   descriptionText: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff'
   },
   buttonsContainer: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-around',
     marginTop: 10
   },
   button: {
     color: blue,
     fontSize: 15
   }
});

export default Profile;