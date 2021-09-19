import React from 'react';
import { blue, white } from '../constants/CustomColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Tabs/Home';
import Phones from './Tabs/Phones';
import Bids from './Tabs/Bids';
import Profile from './Tabs/Profile';
import Loading from './Loading';





const Tab = createBottomTabNavigator();
 
 const Main = () => {
   return (
  <Tab.Navigator screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Profile"   
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
          <Tab.Screen name="Home" component={Home} 
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

          <Tab.Screen name="Profile" component={Loading} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Ionicons 
              name="person" size={20} color={white} />
            ),
          }}
          />
    </Tab.Navigator>
   );
 }

export default Main;
