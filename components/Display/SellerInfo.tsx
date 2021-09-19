import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import {blue, white} from '../../constants/CustomColors';
import userProfile from '../../assets/userprofile.png';
import {Ionicons, MaterialIcons } from '@expo/vector-icons';


const SellerInfo = () => {

  return (
    <View>

      <View style={styles.container}>
        <View>
          <Image source={userProfile} style={styles.image} resizeMode="contain"/>
          <Text style={styles.sellerName}>Artisoft</Text>
        </View>

          <View style={styles.info}>
              <Text style={styles.infoText}>Rating: 4.7 <Ionicons name="star" style={{ color: blue }} size={15} /></Text>
              <Text style={styles.infoText}>Phone Sold: 14 <MaterialIcons name="phone-android" size={15} color={blue} /></Text>
              <Text style={styles.infoText}>Currently Selling: 7 <MaterialIcons name="phone-android" size={15} color={blue} /></Text>
          </View>
      </View>

       <TouchableOpacity activeOpacity={0.9} style={styles.button}>
         <Text style={{fontSize: 15, color: white, textAlign: 'center'}}>GO TO SELLER PROFILE</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  image: {
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: Dimensions.get('window').width / 5
  },
  info: {
  },
  infoText: {
    color: blue,
    fontSize: 15,
    marginTop: 8
  },
  sellerName: {
    color: blue,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 25
  },
  button: {
    alignContent: 'center',
    backgroundColor: blue,
    padding: 5,
    marginTop: 20,
    borderRadius: 15
  }
});

export default SellerInfo;