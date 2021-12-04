import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA = [

    {

        title: "Booking Request Sent",
        id: "2",
        description:"Requested on 19 Jun , 09:00 am",
        image: require("../assets/icons/Vector.png")


        


    },
    {

        title: "Booking Confirmed",
        id: "3",
        description:"Usually Confirms in 24 hrs",
        image: require("../assets/icons/Vect1.png")


        


    },
    {

        title: "Started a Job",
        id: "4",
        description:"Schedule on 21 Jun, 10:00 am",
        image: require("../assets/icons/Vect2.png")


        


    },
    {

        title: "Job Completed",
        id: "5",
        description:"Payment info will appear here",
        image: require("../assets/icons/Vect3.png")



        


    },
]

const SPACING=5;

const Bookingstatus = () => {
 

  return (
      <View style={{height:hp('55%'),marginTop:hp('2%')}}>
              <FlatList
            
    data={DATA}
    keyExtractor={item => item.id}
    renderItem={({item}) =>(
        <View style={styles.main}>
            
            
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.category}>{item.description}</Text>

            
           <Image source={item.image} style={styles.image} />

            
        </View>
    )
  
  
  }
  />
  </View>


  )
  }

  export default Bookingstatus ;

const styles = StyleSheet.create({
  
      
          
    main:{
        height: hp('13%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'white',
        borderRadius:19,
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black'
    },
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        width: wp('60%'),

        


    },
    category:{
     color:'#a8aeb2'
    },
    image:{
        height: hp('10%'),
       width: wp('25%'),
       marginTop: hp('-5%'),
       marginLeft: wp('60%'),



         
    },
   

});