import React from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Upcoming from '../components/Upcoming';
import Cancelled from '../components/Cancelled';
import Completed from '../components/Completed';

const BookingScreen = () => { 
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
             
    <View style={styles.header}>
        <View>
        <Text style={styles.textheader}>Bookings</Text>
        </View>
        
        </View>
      <Tab.Navigator tabBarOptions={{
        
        tabStyle: {
        marginTop:hp('3%'),
        },
        activeTintColor: 'blue',
        pressColor:'white',
        inactiveTintColor:'black',
        labelStyle: { fontSize: 15,fontWeight:'700' },
        style: { backgroundColor: 'white' },
      }}>
        
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Cancelled" component={Cancelled} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
      </View>
      );
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {

      backgroundColor: 'white',
      height: hp('100%'),
      width: wp('100%')

  },
  textheader:{
    fontSize:25,
    textAlign:'center',
    marginTop:hp('2%')
   
  }
})