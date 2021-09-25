import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FrontPage from './HomeStack/FrontPage';
import Search from './HomeStack/Search';
import Cart from './HomeStack/Cart';


const Stack = createStackNavigator();


const Home = () => {

  return (
    <Stack.Navigator  
    initialRouteName="Home"   
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={FrontPage} />
      <Stack.Screen name="Search"  component={Search} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default Home;