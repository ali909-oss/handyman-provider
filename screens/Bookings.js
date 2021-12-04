import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from "./BookingScreen";
import BookingInformation from "./BookingInformation";
import PaymentDone from "./PaymentDone";
import BookingConfirm from "./BookingConfirm";
import { NewMessage } from "./NewMessage";
import UpcomingPro from "../components/UpcomingPro";
const Stack = createStackNavigator();

function NewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="BookingScreen" 
      component={BookingScreen} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="BookingInformation" 
      component={BookingInformation} 
      options={{ headerShown: false }} 
      />
      
       <Stack.Screen 
      name="PaymentDone" 
      component={PaymentDone} 
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
       

       
        
     
    
    </Stack.Navigator>
  );
}

export default NewStack;