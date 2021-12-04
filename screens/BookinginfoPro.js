import React from 'react';
import {
    View,
    StyleSheet,
    Text,Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BookingStatusPro from '../components/BookingStatusPro'
import AcceptPro from '../components/AcceptPro';

const Data =[{
    Id:'Booking ID 2541'
}]

const BookingInfoPro = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.htext}>{Data && Data[0].Id}</Text>
            <AcceptPro />

           
            <Text style={styles.texta}>Booking Status</Text>
           <View style={styles.bookinfo}>
           <BookingStatusPro/>
           </View>
           
           

        </View>
        
    )
}

export default BookingInfoPro;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f8f9fd',
        height: hp('100%'),
        width: wp('100%')

    },
    htext:{
      fontSize:20,
      fontWeight:'400',
      textAlign:'center',
      color:'black',
      fontWeight:'700'

    },
    bookinfo:{
       marginLeft:wp('5%')

    },
    texta:{
      fontSize:15,
      marginLeft:wp('6'),
      color:'#abaeb1',
      marginTop:hp('-6%')
    },
    btn:{
        width: wp('70%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
        marginTop:hp('85%'),marginLeft:wp('15%'),
        position:'absolute'



      },
})