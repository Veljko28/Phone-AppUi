import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FrontPage from './HomeStack/FrontPage';
import Search from './HomeStack/Search';
import Cart from './HomeStack/Cart';


const Stack = createStackNavigator();


const Home = ({changeRemoveTabsOnSearch} : {changeRemoveTabsOnSearch: any}) => {

  return (
    <Stack.Navigator  
    initialRouteName="Cart"   
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={FrontPage} />
      <Stack.Screen name="Search"  children={(props: any) => <Search changeRemoveTabsOnSearch={changeRemoveTabsOnSearch} {...props} />} />
      <Stack.Screen name="Cart" children={(props: any) => <Cart changeRemoveTabsOnSearch={changeRemoveTabsOnSearch} {...props} />} />
    </Stack.Navigator>
  );
}

export default Home;