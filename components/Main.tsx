import React from 'react';
import { blue, white } from '../constants/CustomColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Tabs/Home';
import Phones from './Tabs/Phones';
import Bids from './Tabs/Bids';
import Profile from './Tabs/Profile';
import Loading from './Loading';

import iconChange from '../assets/iconChange';



const Tab = createBottomTabNavigator();
 
 const Main = () => {

   const [revomeTabsOnSearch, changeRemoveTabsOnSearch] = React.useState(false);

   return (
  <Tab.Navigator 
       tabBarHideOnKeyboard={true}
       screenOptions={({ route } : { route: any}) => ({
            tabBarIcon: ({ focused, color, size } : {focused: boolean, color: string, size: number}) => { 
              return iconChange(route.name,focused);
          },
          headerShown: false,
          tabBarStyle: { display: revomeTabsOnSearch ? 'none' : '' },
        })}
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
          <Tab.Screen name="Home"  children={()=><Home changeRemoveTabsOnSearch={changeRemoveTabsOnSearch}/>}
          options={{
            tabBarLabel: 'Home',
          }}
          />
          <Tab.Screen name="Phones" component={Phones} 
          options={{
            tabBarLabel: 'Phones',
          }}
          />

          <Tab.Screen name="Bids" component={Bids} 
          options={{
            tabBarLabel: 'Bids',
          }}
          />

          <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarLabel: 'Profile',
          }}
          />
    </Tab.Navigator>
   );
 }

export default Main;
