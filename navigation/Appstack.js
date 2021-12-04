import React from 'react';
import { width ,isLargeScreen, View,style,StyleSheet,Button, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from "../navigation/tabs"
import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import ManageAddress from '../screens/ManageAddres';
import Support from '../screens/Support';
import AboutUs from '../screens/AboutUs';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Questions from '../screens/Faqs';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Login from '../screens/LoginScreen';
import Register from '../screens/Register';
import ProProfile from '../screens/ProProfile';

const Drawer = createDrawerNavigator();

const Appstack = () => {
  return (
    

    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}
    drawerContentOptions={{
      activeTintColor: 'blue',
      activeBackgroundColor: '#ebf3f9',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'white',
      labelStyle:{
        marginLeft:2,
        fontSize:17,
        
      }
    }}
    >
     <Drawer.Screen
        name = "Home"
        component={Tabs}
        options={{
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        
        />
        <Drawer.Screen
        name = "My Profile"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
             <AntDesign
                name="user"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "My Wallet"
        component={Wallet}
        options={{
          drawerIcon: ({focused, size}) => (
             <AntDesign
                name="wallet"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
        <Drawer.Screen
        name = "ManageAddress"
        component={ManageAddress}
        options={{
          drawerIcon: ({focused, size}) => (
             <Entypo

                name="address"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
        <Drawer.Screen
        name = "Support"
        component={Support}
        options={{
          drawerIcon: ({focused, size}) => (
             <MaterialIcons
                name="contact-support"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
         <Drawer.Screen
        name = "AboutUs"
        component={AboutUs}
        options={{
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="information-circle-outline"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
         <Drawer.Screen
        name = "PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          drawerIcon: ({focused, size}) => (
             <MaterialIcons
                name="privacy-tip"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
         <Drawer.Screen
        name = "FAQ's"
        component={Questions}
        options={{
          drawerIcon: ({focused, size}) => (
             <AntDesign
                name="questioncircleo"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
      
        />
        <Drawer.Screen
        name = "Provider"
        component={ProProfile}
/>
      
       
        
    </Drawer.Navigator>
    
    
  );
};

export default Appstack;

