import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const DATA = [

    {

        name: "Ali",
        id: "1",
        category:'Cleaner',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'5.0',
        image: require("../assets/icons/download23.png")


        


    },
    {

        name: "Khurram",
        id: "2",
        category:'Cleaner',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'4.0',
        image: require("../assets/icons/Layer2.png")


        


    },
    {

        name: "Taha",
        id: "3",
        category:'Cleaner',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'4.5',
        image: require("../assets/icons/Layer3.png")


        


    },
    {

        name: "John",
        id: "4",
        category:'Cleaner',
        date:'21 June 10:00 am',
        staus:'Rated',
        rated:'5.0',
        image: require("../assets/icons/Layer4.png")


        


    },
]

const SPACING=10;

const Completed = () => {
 

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
        
                    <Text style={{color:'grey',fontSize:15}}>{item.staus}</Text>
                    <Text style={{color:'black',fontSize:15}}>{item.rated}</Text>

                   </View>
                   <Image source={item.image} style={styles.image} />
        
        
                   
        
                    
        
                    
                    
        
        
                    
                </View>
            )
          
          
          }
        
          />
          
          </View>     
  )
  }

  export default Completed ;

const styles = StyleSheet.create({
  
      
          
    main:{
        height: hp('15%'),
        marginTop: hp('2@'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
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
     color:'#a8aeb2'
    },
    image:{
        height: hp('15%'),
        width: wp('20%'),
        marginTop: hp('-12%'),
        marginLeft: wp('68%'),
 



         
    },
   

});

