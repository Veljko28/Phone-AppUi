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
import { useSelector } from 'react-redux';
import { State } from '../redux/reduxTypes';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
 
 const Main = () => {

   const [tabVisible, changeTabVisible] = React.useState(true);
   const [currentRouteName, changeCurrentRouteName] = React.useState("");

   React.useEffect( () => {
     console.log(currentRouteName);
     if (currentRouteName === "Search" || currentRouteName === "Cart" || currentRouteName === "Display" || currentRouteName === "Settings") {
       changeTabVisible(false);
     }
     else if (tabVisible === false) {
       changeTabVisible(true);
     }
     
   }, [currentRouteName])

  return (
  <Tab.Navigator 
       tabBarHideOnKeyboard={true}
       screenOptions={({ route } : { route: any}) => ({
            tabBarIcon: ({ focused, color, size } : {focused: boolean, color: string, size: number}) => { 
              return iconChange(route.name,focused);
          },
          headerShown: false,
          tabBarStyle: { display: tabVisible ? '' : 'none' },
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
          <Tab.Screen name="Home"  component={Home}
             options={({ route } : {route: any}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ? getFocusedRouteNameFromRoute(route) : "";
                
                if (routeName !== "") {
                 changeCurrentRouteName(routeName);
               }

               return {};
           }}
          />
          <Tab.Screen name="Phones" component={Phones} 
           options={({ route } : {route: any}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ? getFocusedRouteNameFromRoute(route) : "";
                
                if (routeName !== "") {
                 changeCurrentRouteName(routeName);
               }

               return {};
           }}
          />

          <Tab.Screen name="Bids" component={Bids} 
          options={{
            tabBarLabel: 'Bids',
          }}
          />

          <Tab.Screen name="Profile" component={Profile} 
            options={({ route } : {route: any}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ? getFocusedRouteNameFromRoute(route) : "";
                
                if (routeName !== "") {
                 changeCurrentRouteName(routeName);
               }

               return {};
           }}
          />
    </Tab.Navigator>
   );
 }

export default Main;
