import React from 'react';
import {View, Text, Image,  StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import phone from '../assets/phone.jpg';
import { blue, green, white } from '../constants/CustomColors';
import ImageCarousel from './Display/ImageCarousel';
import { MaterialIcons, Ionicons  } from '@expo/vector-icons'; 
import SellerInfo from './Display/SellerInfo';
import PhoneContainer from './Phone/PhoneContainer';
import ColoredLine from '../constants/ColoredLine';

const PhoneDisplay = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>

        <ImageCarousel />

        <View style={styles.infoRow}>
          <Text style={styles.phoneName}>Pixel XL 2</Text>
          <Text style={{color: green, fontSize: 25}}>350$</Text>
        </View>
        <Text style={{color: '#999', fontSize: 12, margin: 5, marginLeft: 30}}>Display 6.00-inch (1440x2880) · Processor Qualcomm Snapdragon 835 
          · Front Camera 8MP · Rear Camera 12.2MP · RAM 4GB · Storage 64GB · Battery 3520mAh</Text>

        <Text style={{color: blue, fontSize: 17, marginTop: 5, marginBottom: 8, alignSelf: 'flex-start', marginLeft: 30}}>
        <Ionicons name="heart" size={17} color={blue} style={{marginRight: 5}} /> Added to wish list: 4 times</Text>

        <TouchableOpacity style={styles.cartButton} activeOpacity={0.9}>
              <Ionicons name="cart" size={20} color="white" />
              <Text style={{color: white, fontSize: 15, marginLeft: 5}}>ADD TO CART</Text>
        </TouchableOpacity>  


        <View style={styles.categoryButtons}>
            <TouchableOpacity style={styles.categoryButton} activeOpacity={0.9}>
              <MaterialIcons name="category" size={20} color="white" />
              <Text style={{color: white, fontSize: 15, marginLeft: 5}}>Andorid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton} activeOpacity={0.9}>
              <MaterialIcons name="star" size={20} color="white" />
              <Text style={{color: white, fontSize: 15, marginLeft: 5}}>Google</Text>
            </TouchableOpacity>
        </View>

        <Text style={{color: blue, fontSize: 15, marginTop: 10}}>About The Seller</Text>
        <View style={{marginTop: 5}}>
          <ColoredLine/>
        </View>
        <SellerInfo/>

        <PhoneContainer phones={[{},{},{}]} title="Related Phones"/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  phoneName: {
    color: blue,
    fontSize: 25,
    marginRight: Dimensions.get('window').width / 3
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryButtons: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  categoryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: blue,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 25
  },
  cartButton: {
    backgroundColor: green,
    width: Dimensions.get('window').width-20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});


export default PhoneDisplay;
