import React from 'react';
import Header from '../../Header';
import { white, blue } from '../../../constants/CustomColors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Avatar, Image } from 'react-native-paper';
import Constants from 'expo-constants';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import userImage from '../../../assets/userprofile.png';
import ContactModal from './ContactModal'; 

import Listings from './Listings';
import Reviews from './Reviews';
import WishList from './WishList';

const ProfileFront = ({navigation} : {navigation: any}) => {
  const [page, changePage] = React.useState('Listings');
  const [modal, changeModal] = React.useState(false);

  const pagination = (value: string) => {
    changePage(value);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          backgroundColor: blue,
          paddingTop: Constants.statusBarHeight,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity activeOpacity={0.8}>
          <IconButton
            icon={() => (
              <Ionicons name="mail" style={{ color: white }} size={20} />
            )}
            size={30}
            onPress={() => changeModal(true)}
          />
        </TouchableOpacity>
          <Text style={styles.userName}>Artisoft</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <IconButton
            icon={() => (
              <Ionicons
                name="settings-outline"
                style={{ color: white }}
                size={20}
              />
            )}
            size={33}
            onPress={() => navigation.navigate("Settings")}
          />
        </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
          <Avatar.Image size={150} source={userImage} />
          <Text style={styles.descriptionText}>Sold: 15</Text>
          <Text style={styles.descriptionText}>Active Listings: 5</Text>
          <Text style={styles.descriptionText}>
            Rating: 4.75{' '}
            <Ionicons name="star" style={{ color: '#f9ff00' }} size={20} />
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={page === 'Listings' ? styles.selectedButton : styles.button}
            onPress={(e) => pagination('Listings')}>
            Listings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={page === 'Reviews' ? styles.selectedButton : styles.button}
            onPress={(e) => pagination('Reviews')}>
            Reviews
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={page === 'Wish List' ? styles.selectedButton : styles.button}
            onPress={(e) => pagination('Wish List')}>
            Wish List
          </Text>
        </TouchableOpacity>
      </View>

      {page === 'Listings' ? (
        <Listings />
      ) : page === 'Reviews' ? (
        <Reviews />
      ) : (
        <WishList />
      )}

      <ContactModal modal={modal} changeModal={(value: boolean) => changeModal(value)}/>

    </ScrollView>
  );
};

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
    color: '#fff',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    color: blue,
    fontSize: 15,
  },
  selectedButton: {
    color: '#104c61',
    fontSize: 15,
  },
});

export default ProfileFront;
