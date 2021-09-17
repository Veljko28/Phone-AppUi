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

import Main from './components/Main';

const Tab = createBottomTabNavigator();

export default function App() {

  const [loggedIn, changeLoggedIn] = React.useState(true);

    
  return (
  <Provider store={store}>
    <NavigationContainer>
  {loggedIn ? <Main />
  : <Register/>
  }
    </NavigationContainer>
   </Provider>
  );
}

