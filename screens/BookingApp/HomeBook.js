import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../BookingApp/HomeScreen'
import AddMoney from "./AddMoney";
import Transaction from "./Transaction";
import Recharge from './Recharges'
import BookTicket from "./BookTicket";
import Upcoming from "../../components/Upcoming";
import Hotel from "./Hotel";
import HotelDetail from "./Hotelinfo";
import Electricity from "./Electricity";
import Qrcode from "./Qrcode";
import Services from "./Available";
const Stack = createStackNavigator();

function BookStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="AddMoney" 
      component={AddMoney} 
      options={{ headerShown: true}} 
      />
      <Stack.Screen 
      name="Transaction" 
      component={Transaction} 
      options={{ headerShown: true}} 
      />
      <Stack.Screen 
      name="Phone Recharge" 
      component={Recharge} 
      options={{ headerShown: true}} 
      />
       <Stack.Screen 
      name="BookTicket" 
      component={BookTicket} 
      options={{ headerShown: false}} 
      />
      <Stack.Screen 
      name="Upcoming" 
      component={Upcoming} 
      options={{ headerShown: false}} 
      />
       <Stack.Screen 
      name="Book Hotel" 
      component={Hotel} 
      options={{ headerShown: true}} 
      />
      <Stack.Screen 
      name="HotelDetail" 
      component={HotelDetail} 
      options={{ headerShown:true}} 
      />
       <Stack.Screen 
      name="Electricity" 
      component={Electricity} 
      options={{ headerShown:true}} 
      />
      <Stack.Screen 
      name="Qrcode" 
      component={Qrcode} 
      options={{ headerShown:true}} 
      />
      <Stack.Screen 
      name="Services" 
      component={Services} 
      options={{ headerShown:true}} 
      />
      
      
      
      

</Stack.Navigator>
  );
}

export default BookStack;