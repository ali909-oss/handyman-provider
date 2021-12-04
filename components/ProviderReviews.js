import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';


const DATA = [

   
    {  
        user_profile:require("../assets/icons/circle.jpg"),
        id:'2',
        user_name:'Ali',
        date:'20 Dec 2012',
        review:'Best Service',



    },
    {
        user_profile:require("../assets/icons/img1.png"),
        id:'3',
        user_name:'Taha',
        date:'11 Jan 2012',
        review:'Well Worked',

    },
    {
        user_profile:require("../assets/icons/circle.jpg"),
        id:'4',
        user_name:'Ali',
        date:'22 Jul 2012',
        review:'Impressive Work',


    },
    {
        user_profile:require("../assets/icons/circle.jpg"),
        id:'5',
        user_name:'Ali',
        date:'22 Jul 2012',
        review:'Impressive Work',


    },
    {
        user_profile:require("../assets/icons/circle.jpg"),
        id:'6',
        user_name:'Ali',
        date:'22 Jul 2012',
        review:'Impressive Work',


    },
]







const ProviderReviews = () => {
    return (
        
      <View style={{height:hp('58%'),marginTop:hp('-2%'),marginLeft:wp('5%')}}>
      <FlatList
      
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
            <View style={styles.main}>


                <Image source={item.user_profile} style={styles.userimg} />
                <Text style={styles.username}>{item.user_name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.userdes}>{item.review}</Text>




                </View>

)
      
      
}
/>
</View>
    )}

    export default ProviderReviews;

    const styles = StyleSheet.create({
        container:{
     
           backgroundColor: 'white',
           height: hp('100%'),
           width: wp('100%'),
           
     
        },
       
        texthead:{
              fontSize:25,
              fontWeight:'500',
              marginLeft: wp('15'),
              color:'#4d4d4d',
              marginTop: hp('-5'),
    
    
    
        },
        main:{
            height: hp('22%'),
            marginTop: hp('3%'),
            width: wp('90%'),
            backgroundColor:'white',
            borderRadius:19
        },
       
    
        
        
       
        Imageholder:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            width: wp('60%'),
            marginLeft: wp('8%'),
    
           
    
            
    
    
        },
        image1:{
            height: hp('18%'),
            width: wp('34%'),
            marginTop: hp('-20'),
    
        },
        category:{
         color:'#a8aeb2'
        },
        bg:{
            height: hp('25%'),
            width: wp('100%'),
            marginTop: hp('2'),
            marginLeft: wp('2'),
             
        },
        img:{ height: hp('25%'),
        width: wp('30%'),
        marginTop: hp('-20'),
    
            
        },
        userimg:{
            height: hp('10%'),
            width: wp('15%'),
            marginLeft:wp('5%')
    
        },
        username:{
            color:'black',
            marginLeft:wp('25%'),
            marginTop:hp('-8%'),
            fontSize:20
    
        },
        date:{
            color:'#a8aeb2',
            marginLeft:wp('25%'),
            padding:5

    
    
        },
        userdes:{
            color:'#a8aeb2',
            marginLeft:wp('25%'),
            fontSize:15,
            padding:15

    
    
    
    
    
        },
       
    
    });