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
import Slider from '@react-native-community/slider';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const Data = [
    {
        id:'1',
        name: 'Eko Hotel & Suits',
        rating: '4.5',
        reviews: '3000',
        type: '5 star',
        icon: require('../assets/icons/five.png'),
        price:'2800',


        
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       



    },
    {
        id:'2',
        name: 'Eko Hotel & Suits',
        rating: '4.2',
        reviews: '1003',
        type: '3 star',
        icon: require('../assets/icons/five.png'),
        price:'3500',

        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       

    },
    {
        id:'3',
        name: 'Eko Hotel & Suits',
        rating: '4.0',
        reviews: '1045',
        type: '2 star',
        price:'3000',

        icon: require('../assets/icons/five.png'),

        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        

    },
    {
        id:'4',
        name: 'Eko Hotel & Suits',
        rating: '3.5',
        reviews: '145',
        type: '2 star',
        icon: require('../assets/icons/five.png'),
        price:'2800',


        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       

    },
]

const DATA=[
    {
        image: require('../assets/icons/img3.jpg'),
        image: require('../assets/icons/img1.jpg'),
        image: require('../assets/icons/img2.jpg'),


       

    }
   
]



const HotelList = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: hp('2%'), height: hp('70%') }}>
            <FlatList
            nestedScrollEnabled={true}

                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                    <View style={styles.main}>
                        <View>
                            <ScrollView
                            horizontal
                            >
                        
                            {DATA.map((data)=>{
                                return(
                                    
                                        
                                    <Image source={data.image} style={styles.image} />
                                    

                                )
                            })}
                            </ScrollView>
                            </View>
                            <View style={styles.priceback}>
                            <Text style={styles.price}>₦{item.price}</Text>
                            </View>


                    
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={{flexDirection:'row',margin:4}}>
                            <Text style={styles.rating}>{item.rating}</Text>
                            <Image source={item.icon} style={styles.star} />

                            <Text style={styles.reviews}>({item.reviews})</Text>
                            <Text style={styles.type}>{item.type} Hotel</Text>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>

                    </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
export default HotelList;
const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    main: {
        width: wp('90%'),
        height: hp('55%'),
        marginLeft: wp('5%'),
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginBottom:hp('1%'),
        padding: 5
    },
    image:{
        height:hp('25%'),
        width:wp('85%'),
        justifyContent:'center'
    },
    star:{
        height:hp('7%'),
        width:wp('18%'),
        marginTop:hp('-2%'),
        marginLeft:wp('2%')
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        padding:4
    },
    rating:{
        fontSize:16,
    },
    reviews:{
        fontSize:16,
        marginLeft:wp('2%')
    },
    type:{
        fontSize:16,
        marginLeft:wp('2%')
    },
    description:{
        padding:5,
        fontSize:13
    },
    price:{
        flexWrap:'wrap',
        color:'#ffffff',
        fontSize:18
    },
    priceback:{
        backgroundColor:'#3f51b5',
        width:wp('18%'),
        height:hp('5%'),
        borderRadius:5,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        marginTop:hp('-2%'),
        marginLeft:wp('60%')
    }
})