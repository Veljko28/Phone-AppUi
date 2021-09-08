import React from 'react';
import {View, Text} from 'react-native';
import phone from '../../../assets/phone.jpg';
import MapPhone from '../../Phone/MapPhone';

const Listings = () => {

  const list = [
    {name: "Pixel 2 Xl", image: phone, description: "This is a listing phone", price: 350},
    {name: "IPhone 7+", image: phone, description: "This is a listing phone", price: 525},
    {name: "Huawei P20", image: phone, description: "This is a listing phone", price: 275},
    {name: "Redmi Note 9", image: phone, description: "This is a listing phone", price: 400},
  ]

  return (
    <View>
      {list.map(x => MapPhone(x))}
    </View>
  );
}

export default Listings;