import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View,Text, Image,StyleSheet, TouchableOpacity,size } from "react-native";


import { Home,Bookings,Chat,ProviderBookings} from "../screens"
import NewStackP from "../screens/ProviderBookings";
import { COLORS } from "../constants"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import ProviderProfile from "../screens/ProviderProfile";
import ProProfile from "../screens/ProProfile";




const Tab = createBottomTabNavigator()

const TabsProvider = () => {
  

    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false ,
                
            }}
        >
            
            <Tab.Screen
                name="Home"
                component={ProviderBookings}
                

               options={{
                showLabel: false ,
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                           <FontAwesome
                name="calendar-check-o"
                size={20}
                color={focused ? '#7cc' : '#ccc'}
                
             />
             <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:12,marginBottom:5}}>Bookings</Text>
                        </View>
                       
                        
          
                      
                      );
                    }, }}
                
            />
            
            
           
          
            <Tab.Screen
                name="-"
                component={ProProfile}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                             <AntDesign
                name="user"
                 size={22}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:12,marginBottom:5}}>Account</Text>
                         </View>
                        
                         
           
                         
                       );
                     }, }}
           
            />
            <Tab.Screen
                name=","
                component={Chat}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <AntDesign
                 name="wechat"
                 size={22}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:12,marginBottom:5}}>Chat</Text>
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
        </Tab.Navigator>
    )
}

export default TabsProvider;