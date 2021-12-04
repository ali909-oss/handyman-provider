import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View,Text, Image,StyleSheet, TouchableOpacity,size } from "react-native";


import { Home,Bookings,Chat} from "../screens"
import { COLORS } from "../constants"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';




const Tab = createBottomTabNavigator()

const Tabs = () => {
  

    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false ,
                
            }}
        >
            
            {<Tab.Screen
                name="Home"
                component={Home}
                

               options={{
                showLabel: false ,
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                           <Ionicons
                name="md-home"
                size={25}
                color={focused ? '#7cc' : '#ccc'}
                
             />
             <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Home</Text>
                        </View>
                       
                        
          
                      
                      );
                    }, }}
                
            />
            }
            
           
          
            <Tab.Screen
                name="-"
                component={Bookings}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <FontAwesome
                 name="calendar-check-o"
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Bookings</Text>
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
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Chat</Text>
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
        </Tab.Navigator>
    )
}

export default Tabs;