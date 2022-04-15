import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from "./ChatScreen";
import ChatScreenPro from "./ChatScreenPro";

const Stack = createStackNavigator();

function NStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen 
      name="ChatScreen" 
      component={ChatScreenPro} 
      options={{ headerShown: false }} 
      />
      
     </Stack.Navigator>
  );
}

export default NStack;