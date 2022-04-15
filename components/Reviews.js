import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Picker } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from "react-native-vector-icons/dist/Entypo";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import ProgressBar from 'react-native-progress/Bar';


const testData = [
    { id: '1', star: '5 ★', percent: '45%',progress:'0.4' },
    { id: '2', star: '4 ★', percent: '35%',progress:'0.3' },
    { id: '3', star: '3 ★', percent: '25%',progress:'0.2' },
    { id: '3', star: '2 ★', percent: '15%',progress:'0.1' },
    { id: '3', star: '1 ★', percent: '5%',progress:'0.2' },


];
const Data=[
    {
        status:'Very Good',
        rating: '4.0',
        reviews: '145',
        star: require('../assets/icons/five.png'),


    }
]

const Rating=[
    {
        rooms:'2.3',
        location:'3.2',
        service:'3'
    }
]
const Reviews = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.texta}>Review Summary</Text>
                <View style={{flexDirection:'row'}}>
                <View style={{marginTop:hp('2%')}}>
                {testData.map((data)=>{
                    return(
                        <View>
                             <View style={styles.Imageholder}>
                                    <Text style={{marginLeft:wp('2%')}}>{data.star}</Text>

                                    <ProgressBar style={{ marginTop: hp('1%'),marginLeft:wp('2%'),justifyContent: 'center' }} progress={data.progress} width={wp('40%')} color={'#f6b500'} borderWidth={0.3} borderColor={'black'} />
                                    <Text style={{ marginLeft:wp('2%') }}>{data.percent}</Text>

                                </View>
                        </View>
                    )}
                )}
                </View>
                <View style={{marginTop:hp('4%'),marginLeft:wp('3%')}}>
                {Data.map((data)=>{
                    return(
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.rating}>{data.rating}</Text>
                            <View style={{flexDirection:'column',marginLeft:wp('2%')}}>
                                <Text style={{color:'black'}}>{data.status}</Text>
                                <Image source={data.star} style={styles.star} />

                                <Text style={{color:'black'}}>{data.reviews} Reviews</Text>
                                </View>

                        </View>
                    )
                })
            }
            </View>
            </View>
            {Rating.map((data)=>{
                    return(
                        <View style={{marginTop:hp('5%')}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.text}>Rooms</Text>
                        <Text style={styles.text}>Location</Text>
                        <Text style={styles.text}>Service</Text>

                    </View>
                    
                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('2%')}}>
                            <Text style={styles.textt}>{data.rooms}</Text>
                            <Text style={styles.textt}>{data.location}</Text>
                            <Text style={styles.textt}>{data.service}</Text>

                        </View>
                        </View>
                    )
            })}
                        </View>
        </View>
    )
}
export default Reviews;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        width: wp('100%'),
        height: hp('40%'),
        borderRadius: 5,
        padding: 5,
        marginTop: hp('2%')

    },
    texta:{
        fontSize:18,
        fontWeight:'700',
        color:'black',
        marginLeft:wp('2%')
    },

Imageholder: {
    flexDirection: 'row',




},
rating:{
    fontSize:35,
    fontWeight:'700',

},
star:{
    height:hp('2%'),
    width:wp('18%'),
},
text:{
    fontSize:18,
    fontWeight:'700',
    
},
textt:{
    fontSize:18,
    color:'black'
},
verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  }
})