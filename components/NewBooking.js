import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import UpcomingPro from './UpcomingPro';
import Bookinginfo from '../components/Bookinginfo';
import AcceptPro from './AcceptPro';


const DATA = [

    {

        name: "Ali",
        id: "1",
        category: 'Home clean',
        date: '21 June 10:00 am',
        staus: 'New Request',
        image: require("../assets/icons/user.jpg")





    },
    {

        name: "Khurram",
        id: "2",
        category: 'Carpet Shampooing',
        date: '21 June 10:00 am',
        staus: 'New Request',
        image: require("../assets/icons/user.jpg")





    },



]

const data = [
    {
        title:'Address:',
        id:'1',
        address:'House No 145-B Street 1  New York ,USA'
    }
]

const SPACING = 10;

const NewBooking = () => {
    const navigation = useNavigation();
   


    return (

        <FlatList

            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate("BookingInformation")}>
                
                    <View style={styles.main}>
                        
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.category}>{item.category}</Text>

                        <View style={styles.Imageholder}>
                            <Text style={{ color: 'blue', fontSize: 15 }}>{item.date}</Text>


                            <Text style={{ color: 'grey', fontSize: 15, marginLeft: wp('5%') }}>{item.staus}</Text>
                        </View>
                        <Image source={item.image} style={styles.image} />












                    </View>
                </TouchableOpacity>
            )


            }

        />

    )
}

export default NewBooking;

const styles = StyleSheet.create({



    main: {
        height: hp('15%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding: SPACING,
        marginBottom: -2,
        backgroundColor: 'white',
        borderRadius: 19,
        marginLeft: wp('5%')
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        width: wp('60%'),
        marginTop:hp('-1%')




    },
    category: {
        color: '#a8aeb2',
        padding:5,
        fontSize:16
    },
    image: {
        height: hp('8%'),
        width: wp('16%'),
        marginTop: hp('-12%'),
        marginLeft: wp('65%')





    },
    modal: {
        flex:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ebf3f9",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: hp('20%'),
        marginLeft: wp('10%'),
        height:hp('65%')

    }

});

