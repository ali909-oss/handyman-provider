import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Profile";
import Notification from "./Notification";
import Help from "./Help";
import TermsandConditions from "./Conditions";
import ViewProfile from "./ViewProfile";
const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="Notification" 
      component={Notification} 
      options={{ headerShown: true }} 
      />
      <Stack.Screen 
      name="Help" 
      component={Help} 
      options={{ headerShown: true }} 
      />
       <Stack.Screen 
      name="Terms and Conditions" 
      component={TermsandConditions} 
      options={{ headerShown: true }} 
      />
      <Stack.Screen 
      name="ViewProfile" 
      component={ViewProfile} 
      options={{ headerShown: true }} 
      />
     
     
      
      
      
      

</Stack.Navigator>
  );
}

export default AccountStack;
    