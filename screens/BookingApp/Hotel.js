import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, FlatList, Picker } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView, Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons, { Button } from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Slider from '@react-native-community/slider';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HotelList from "../../components/HotelList";
import HotelFilters from "../../components/HotelFilters";

const BookHotel = () => {
   

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}

>
        <View style={styles.container}>
           
           <HotelFilters/>
            <HotelList/>
           
            </View>
           
            </ScrollView>
             
       
    )
}
export default BookHotel;

const styles = StyleSheet.create({
    container: {
        height: hp('110%'),
        width: wp('100%'),
    },
   
})