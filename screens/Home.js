import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen"; 
import HomeClean from "./HomeClean";
import HomeCleanProvider from "./HomeCleanProvider";
import ProviderProfile from "./ProviderProfile";
import BookingProvider from "./BookingProvider";
import BookingConfirm from "./BookingConfirm";
import SeriveRequest from "./ServiceRequest";
import Profile from "./Profile";
import BookingScreen from "./BookingScreen";
import ProviderSelection from "./ProviderSelection";
import Location from "./Location";
import { NewMessage } from "./NewMessage";
import Login from "./LoginScreen";
import RegisterScreen from "./Register";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen
       name="Register" 
       component={RegisterScreen}
       options={{ headerShown: false }} 
        />
      <Stack.Screen
       name="HomeClean" 
       component={HomeClean}
       options={{ headerShown: false }} 
        />
      <Stack.Screen
       name="HomeCleanProvider" 
       component={HomeCleanProvider}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="ProviderProfile" 
       component={ProviderProfile}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="BookingProvider" 
       component={BookingProvider}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="BookingConfirm" 
       component={BookingConfirm}
       options={{ headerShown: false }} 
        />
         <Stack.Screen
       name="SeriveRequest" 
       component={SeriveRequest}
       options={{ headerShown: false }} 
        />
         <Stack.Screen
       name="Profile" 
       component={Profile}
       options={{ headerShown: false }} 
        />
        <Stack.Screen 
      name="BookingScreen" 
      component={BookingScreen} 
      options={{ headerShown: false }} 
      />
     
         <Stack.Screen
       name="ProviderSelection" 
       component={ProviderSelection}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="Location" 
       component={Location}
       options={{ headerShown: false }} 
        />
         <Stack.Screen
       name="NewMessage" 
       component={NewMessage}
       options={{ headerShown: false }} 
        />
        
    
    </Stack.Navigator>
  );
}

export default MyStack;
