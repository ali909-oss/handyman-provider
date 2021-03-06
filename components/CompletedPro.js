import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
const DATA = [

    {

        name: "Ali",
        id: "1",
        category:'Home Clean',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'5.0',
        image: require("../assets/icons/user.jpg")


        


    },
    {

        name: "Khurram",
        id: "2",
        category:'Bath Clean',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'4.0',
        image: require("../assets/icons/user.jpg")


        


    },
    {

        name: "Taha",
        id: "3",
        category:'Carpet Clean',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'4.5',
        image: require("../assets/icons/user.jpg")


        


    },
    {

        name: "John",
        id: "4",
        category:'Bath Clean',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'5.0',
        image: require("../assets/icons/user.jpg")


        


    },
]

const SPACING=10;

const CompletedPro = () => {
 

  return (
    <View style={{height:hp('70%')}}>
<FlatList
            
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
        
                    <View style={styles.Imageholder}>
                    <Text style={{color:'blue',fontSize:15}}>{item.date}</Text>
                    <Text style={{color:'grey',fontSize:15,marginLeft:wp('4%')}}>Rated</Text>
                    <FontAwesome style={{marginLeft:wp('4%')}} name={"star"} size={20} color="#ffa534" />

         
                    <Text style={{color:'black',fontSize:15,marginLeft:wp('4%')}}>{item.rated}</Text>
                   </View>
                   <Image source={item.image} style={styles.image} />

        
        
                   
        
                    
        
                    
                    
        
        
                    
                </View>
            )
          
          
          }
        
          />
          
          </View>     
  )
  }

  export default CompletedPro ;

const styles = StyleSheet.create({
  
      
          
    main:{
        height: hp('15%'),
        marginTop: hp('2@'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom: -2,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%')
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
     color:'#a8aeb2',
     padding:5,
     fontSize:16
    },
    image:{
        height: hp('8%'),
        width: wp('16%'),
        marginTop:hp('-12%'),
        marginLeft:wp('65%')
 



         
    },
   

});

