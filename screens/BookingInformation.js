import React from 'react';
import {
    View,
    StyleSheet,
    Text,Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Bookinginfo from '../components/Bookinginfo';
import Bookingstatus from '../components/Bookingstatus';
import Bottomsheet from '../components/Bottomsheet';

const Data =[{
    Id:'Booking ID 2541'
}]

const BookingInformation = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.htext}>{Data && Data[0].Id}</Text>
            <View style={styles.bookinfo}>
                <Bookinginfo/>
            </View>
            <Text style={styles.texta}>Booking Status</Text>
           <View style={styles.bookinfo}>
           <Bookingstatus/>
           </View>
           
                   


        </View>
        
    )
}

export default BookingInformation;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ebf3f9',
        height: hp('100%'),
        width: wp('100%')

    },
    htext:{
      fontSize:20,
      fontWeight:'700',
      textAlign:'center',
      color:'black'

    },
    bookinfo:{
       marginLeft:wp('5%')

    },
    texta:{
      fontSize:15,
      marginLeft:wp('6'),
      color:'#abaeb1'
    },
    btn:{
        width: wp('90%'),
        marginTop:hp('15%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
        marginTop:hp('85%'),marginLeft:wp('5%'),
        position:'absolute'



      },
})