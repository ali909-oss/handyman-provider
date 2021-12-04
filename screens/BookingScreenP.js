import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CancelledPro from '../components/CancelledPro'
import UpcomingPro from '../components/UpcomingPro';
import NewBooking from '../components/NewBooking';
import CompletedPro from '../components/CompletedPro';

const BookingScreenP = ({navigation}) => { 
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
             
    <View style={styles.header}>
        <View>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Image style={styles.imgmenu} source={require('../assets/icons/menu1.png')} />
                </TouchableOpacity>
        <Text style={styles.textheader}>Bookings</Text>
        </View>
        
        </View>
      <Tab.Navigator tabBarOptions={{
        
        tabStyle: {
        marginTop:hp('2%'),
        },
        activeTintColor: 'blue',
        pressColor:'white',
        inactiveTintColor:'black',
        labelStyle: { fontSize: 12,fontWeight:'700' },
        style: { backgroundColor: 'white' },
      }}>
         <Tab.Screen name="New" component={NewBooking} />
        <Tab.Screen name="Accepted" component={UpcomingPro} />
        <Tab.Screen name="Cancelled" component={CancelledPro} />
        <Tab.Screen name="Completed" component={CompletedPro} />
      </Tab.Navigator>
      </View>
      );
}

export default BookingScreenP;

const styles = StyleSheet.create({
  container: {

      backgroundColor: 'white',
      height: hp('100%'),
      width: wp('100%'),

  },
  textheader:{
    fontSize:25,
    textAlign:'center',
    marginTop:hp('2%')
   
  },
  imgmenu:{
    height: hp('4%'),
    width: wp('6%'),
    marginLeft:wp('3%'),
    marginTop:hp('2%')
  
},
})