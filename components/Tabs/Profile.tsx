import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileFront from './ProfileComps/ProfileFront';
import ProfileSettings from './ProfileComps/ProfileSettings';




const Stack = createStackNavigator();


const Profile = () => {

  return (
    <Stack.Navigator  
    initialRouteName="Front"   
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Front" component={ProfileFront} />
      <Stack.Screen name="Settings" component={ProfileSettings} />
    </Stack.Navigator>
  );
}

export default Profile;