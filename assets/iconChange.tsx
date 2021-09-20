import { Ionicons } from '@expo/vector-icons';
import React from 'react';

{/*BOTTOM TAB ICON CHANGE ON CLICK FROM OUTLINED TO FILLED*/}
export default function iconChange(name: string, focused: boolean) {
  if (name === 'Home') {
      return focused ? <Ionicons  name="home" size={20} color="white" /> : 
        <Ionicons  name="home-outline" size={20} color="white" />
  } 
  else if (name === 'Phones') {
   return focused ? <Ionicons  name="phone-portrait" size={20} color="white" /> : 
       <Ionicons  name="phone-portrait-outline" size={20} color="white" />
  }
  else if (name === 'Bids') {
      return focused ? <Ionicons  name="time" size={20} color="white" /> : 
       <Ionicons  name="time-outline" size={20} color="white" />
  }
  else if (name === 'Profile') {
      return focused ? <Ionicons  name="person" size={20} color="white" /> : 
        <Ionicons  name="person-outline" size={20} color="white" />
  }
}