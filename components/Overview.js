import React, { useState } from "react";
import { View ,Text,StyleSheet,Image} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Price from "./Price";
import ProgressBar from 'react-native-progress/Bar';
import StarRating from 'react-native-star-rating';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

const Data=[
    {
        name: 'Eko Hotel & Suits',
        rating: '4.0',
        reviews: '145',
        type: '2 star',
        star: require('../assets/icons/five.png'),
        price:"3000",
        icon:'star',
        status:'Very Good',
        phone:'(042) 35457288',
        avail:'Simple rooms with free Wi-Fi in a laid-back hotel offering laundry facilities & a business centre.',
        address:"558-D Maulana Shaukat Ali Rd, Al Rahim Homes, Lahore, Punjab 54000 "
        
    }
]

const testData = [
    { id: '1', star: '5', progress: '0.5' },
    { id: '2', star: '4', progress: '0.4' },
    { id: '3', star: '3', progress: '0.4' },
    { id: '3', star: '2', progress: '0.2' },
    { id: '3', star: '1', progress: '0.1' },


];

const OverView=()=>{
    const [Rating,setRating]=useState('')
    return(
       

        <View>
           <View style={styles.header}>
          

{Data.map((data)=>{
                    return(
                        <View style={{marginTop:hp('1%'),marginLeft:wp('3%')}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.name}>{data.name}</Text>
                            <View style={styles.priceback}>
                            <Text style={styles.price}>₦{data.price}</Text>
                            </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.rating}>{data.rating}</Text>
                                <Image source={data.star} style={styles.star} />

                                <Text style={styles.reviews}>({data.reviews})</Text>
                                <Text style={styles.type}>{data.type} Hotel</Text>

                            </View>
                            <Text style={styles.address}>{data.address}</Text>
                            <Text>Call : {data.phone}</Text>
                            <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:hp('1%')}}>
                            {testData.map((data)=>{
                            return(
                                <View>
                                     <View>

                                    <ProgressBar style={{ marginTop: hp('1%'), marginLeft: wp('2%'), justifyContent: 'center' }} progress={data.progress} width={wp('30%')} color={'#f6b500'} borderWidth={0.2} borderColor={'black'} />

                                </View>
                                </View>
                            )
                        })}
                        </View>
                        <View style={{flexDirection:'column'}}>
                        <View style={{ marginTop:hp('1%'),marginLeft:wp('5%'),flexDirection:'row',padding:2}}>
                        <Text style={{fontSize:22}}>{data.rating}</Text>
                        <FontAwesome name={data.icon} size={25} color="#f6b500"
                        style={{marginLeft:wp('1%')}}
                        />
                        </View>
                        <View style={{flexDirection:'row',marginLeft:wp('2%'),padding:2}}>
                            <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>{data.status}</Text>
                            <Text style={{fontSize:16,marginLeft:wp('1%')}}>|</Text>
                            <Text style={{color:'blue',fontSize:15,marginLeft:wp('1%')}}>{data.reviews} reviews</Text>
                        </View>
                        </View>
                        
                        </View>
                        <Text style={{marginTop:hp('2%'),fontSize:14,color:'black'}}>{data.avail}</Text>

                        </View>
                       
                    

                            
                        

                    )
                })}
                 

</View>

        </View>

    )
}
export default OverView;
const styles=StyleSheet.create({
    header:{
        backgroundColor:'#ffffff',
        width:wp('100%'),
        height:hp('50%'),
        borderRadius:5,
        padding:5,
        marginTop:hp('2%')

    },
    star:{
        height:hp('7%'),
        width:wp('18%'),
        marginTop:hp('-2%'),
        marginLeft:wp('2%')
    },
    name:{
        fontSize:25,
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
    address:{
        fontSize:16,
    },
    price:{
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
    },
    Imageholder:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})