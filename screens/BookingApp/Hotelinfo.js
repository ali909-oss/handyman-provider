import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, FlatList, Picker } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView, Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Carasol from "../../components/Carasol";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverView from "../../components/Overview";
import Price from "../../components/Price";
import Reviews from "../../components/Reviews";
import Location from "../../components/Location";
import Photos from "../../components/Photos";


const HotelDetail = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
            <Carasol/>
            </View>
            <View style={{flex:4}}>
            <Tab.Navigator tabBarOptions={{
        
        tabStyle: {
        marginTop:hp('1%'),
        width:wp('20%')
        },
        activeTintColor: '#1a73e8',
        inactiveTintColor:'black',
        pressColor:'#1a73e8',
        labelStyle: { fontSize: 10,fontWeight:'700' },
        style: { backgroundColor: '#ffffff'
    },
      }}>
        
        <Tab.Screen name="Overview" component={OverView} />
        <Tab.Screen name="Price" component={Price} />
        <Tab.Screen name="Reviews" component={Reviews} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="Photos" component={Photos} />




        
      </Tab.Navigator>
      </View>
            
        </View>
    )
}
export default HotelDetail;
const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
   
})