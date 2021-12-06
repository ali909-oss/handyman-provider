import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const DATA = [

  {

      name: "Ali",
      id: "1",
      category:'Cleaner',
      date:'21 June 10:00 am',
      staus:'Cancelled',
      image: require("../assets/icons/download23.png")


      


  },
  {

      name: "Khurram",
      id: "2",
      category:'Cleaner',
      date:'21 June 10:00 am',
      staus:'Cancelled',
      image: require("../assets/icons/Layer2.png")


      


  },
  

    
]

const SPACING=5;

const Upcoming = () => {
 

  return (
    
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
                   </View>
                   <Image source={item.image} style={styles.image} />
        
        
                   
        
                    
        
                    
                    
        
        
                    
                </View>
            )
          
          
          }
        
          />
        
  )
  }

  export default Upcoming ;

const styles = StyleSheet.create({
  
      
          
    main:{
        height: hp('15%'),
        marginTop: hp('2@'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:-3,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%')
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
        padding:5
    },
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:5,
        width: wp('60%'),

        


    },
    category:{
     color:'#a8aeb2',
     fontSize:16,
     padding:5
    },
    image:{
        height: hp('12%'),
       width: wp('16%'),
       marginTop: hp('-12%'),
       marginLeft: wp('60%'),



         
    },
   

});

