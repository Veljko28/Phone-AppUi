import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneList from './PhoneStack/PhoneList';
import PhoneDisplay from './PhoneStack/PhoneDisplay';


const Stack = createStackNavigator();


const Phones = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}
    initialRouteName="List" 
    >
        <Stack.Screen
          name="List"
          component={PhoneList}
        />
        <Stack.Screen name="Display" component={PhoneDisplay} />
      </Stack.Navigator>
  )
}

export default Phones;