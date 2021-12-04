import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreenP from "./BookingScreenP";
import BookingInformation from "./BookingInformation";
import PaymentDone from "./PaymentDone";
import BookingConfirm from "./BookingConfirm";
import { NewMessage } from "./NewMessage";
import HomeCleanProvider from "./HomeCleanProvider";
import ProviderSelection from "./ProviderSelection";
import UpcomingPro from "../components/UpcomingPro";
import ServicesPro from "./ServicesPro";
import RatingsPro from "./RatingsPro";
import BookingInfoPro from "./BookinginfoPro";
import JobCompleted from "./JobCompleted";
const Stack = createStackNavigator();

function NewStackP() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="BookingScreen" 
      component={BookingScreenP} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="BookingInformation" 
      component={BookingInfoPro} 
      options={{ headerShown: false }} 
      />
      
       <Stack.Screen 
      name="JobCompleted" 
      component={JobCompleted} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen
       name="BookingConfirm" 
       component={BookingConfirm}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="NewMessage" 
       component={NewMessage}
       options={{ headerShown: false }} 
        />
         <Stack.Screen
       name="ProviderSelection" 
       component={ProviderSelection}
       options={{ headerShown: false }} 
        />
         <Stack.Screen
       name="ServicesPro" 
       component={ServicesPro}
       options={{ headerShown: false }} 
        />
        <Stack.Screen
       name="RatingPro" 
       component={RatingsPro}
       options={{ headerShown: false }} 
        />
        
       
        
     
    
    </Stack.Navigator>
  );
}

export default NewStackP;