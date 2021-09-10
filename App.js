import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from './components/Tabs/Home';
import Phones from './components/Tabs/Phones';
import Bids from './components/Tabs/Bids';
import Profile from './components/Tabs/Profile';
import { blue, white } from './constants/CustomColors';
import { Provider } from 'react-redux';
import store from './redux/store';


import Register from './components/UserControl/Register';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {

    
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"   
      tabBarOptions={{
       activeTintColor: white,
       inactiveTintColor: 'lightgray',
       activeBackgroundColor: blue,
       inactiveBackgroundColor: blue,
           style: {
                 backgroundColor: blue,
                 paddingBottom: 3,
                 display: 'none'
           }
        }}
      >
        <Tab.Screen name="Home" component={Register} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home" size={20} color={white} />
          ),
        }}
        />
        <Tab.Screen name="Phones" component={Phones} 
        options={{
          tabBarLabel: 'Phones',
          tabBarIcon: () => (
            <Ionicons 
            name="phone-portrait" size={20} color={white} />
          ),
        }}
        />

         <Tab.Screen name="Bids" component={Bids} 
        options={{
          tabBarLabel: 'Bids',
          tabBarIcon: () => (
            <Ionicons 
            name="time" size={20} color={white} />
          ),
        }}
        />

        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Ionicons 
            name="person" size={20} color={white} />
          ),
        }}
        />



      </Tab.Navigator>
    </NavigationContainer>
   </Provider>
  );
}

