import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View,Text, Image,StyleSheet, TouchableOpacity,size } from "react-native";

import { HomeBook,Account,Orders,Scan } from "../screens";
import { COLORS } from "../constants"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from "react-native-vector-icons/dist/Feather";




const Tab = createBottomTabNavigator()

const BookTabs = () => {
  

    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false ,
              style: {
                height: 60,
                width: 400,
                flexDirection: 'column',
                alignSelf: 'center',
                elevation: 3,
                borderTopStartRadius: 5,
                borderTopEndRadius: 5,

            },
                
            }}
        >
            
            {<Tab.Screen
                name="Home"
                component={HomeBook}
                

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
             <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5,padding:2}}>Home</Text>
                        </View>
                       
                        
          
                      
                      );
                    }, }}
                
            />
            }
             <Tab.Screen
                name="Scan"
                component={Scan}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <AntDesign
                 name="scan1"
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5,padding:2}}>Scan</Text>
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
             <Tab.Screen
                name="Orders"
                component={Orders}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <Feather
                 name="list"
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
                           
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5,padding:2}}>Orders</Text>
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
            
           
          
            <Tab.Screen
                name="-"
                component={Account}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                           <Feather
                 name="user"
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5,padding:2}}>Account</Text>
                         </View>
                        
                         
           
                         
                       );
                     }, }}
           
            />
           
            
        </Tab.Navigator>
    )
}

export default BookTabs;