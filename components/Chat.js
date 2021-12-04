import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Message from "./Message";


const Stack = createStackNavigator();

function NStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Message" 
      component={Message} 
      options={{ headerShown: false }} 
      />
    
      
     
    
    </Stack.Navigator>
  );
}

export default NStack;