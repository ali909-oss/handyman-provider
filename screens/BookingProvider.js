import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DatenTime } from '../components/DatenTime';
const DATA = [

    {
  
        title: "Home Clean > Carpet Shampooing",
        id: "6",
        name:'Address:',
        adress:'New York ,USA',
        name2:'Description:',
        description:"Loesum ipsum dolor sit amet,sed do incid dunt ut labore",
        btn:'Amount to Pay : $15/hr'
  
        
  
  
    },
  ]
  

const array=[
    {
title:'Booking',
id:'1',
name:'Ali Hafeez',
rate:'Rate',
price:'$12/hr'
}
]
  
const BookingProvider = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            
        <View style={styles.header}>
       

       
        <Image style={styles.bg} source={require('../assets/icons/download22.png')} />  
       
    
        <Image style={styles.img} source={require('../assets/icons/download23.png')} />    
        


            </View>


            <View style={styles.footer}>
                
            <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height:hp('40%'),
        }}
      >
      
         <FlatList
            
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.address}>{item.name}</Text>

                    <Text style={styles.adress}>{item.adress}</Text>
                    <Text style={styles.descr}>{item.name2}</Text>



                    <Text style={styles.category}>{item.description}</Text>

  
              

                    
        
                    
                </View>
                

            )
            
          
          
          }
          
          
          />
          
          
          </View>
          
    

           
      
     
        
    

    </View>
    <DatenTime/>
     <View style={styles.btn}>
    
    <Button title="Confirm Booking" onPress={()=> navigation.navigate("BookingConfirm")}/>
    </View>
    
           </SafeAreaView>
           
    )}

export default BookingProvider;


const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:50,
        backgroundColor:'#ebf3f9'
    },
    footer:{
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
    
    },
    texta:{
        fontSize:15,
        marginLeft:wp('6'),
        color:'#abaeb1'
      },
      btn:{
        width: wp('60%'),
        marginTop:hp('5%'),
        borderRadius:10,
        borderWidth:2,
        borderColor:'#2196f3',
        position:'absolute',
        marginTop:hp('50%'),
        overflow:"hidden"


      },
      main:{
        height: hp('20%'),
        width: wp('90%'),
      
        backgroundColor:'white',
        borderRadius:19,
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
    },
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        width: wp('60%'),

        


    },
    date:{
          fontSize:15,
          marginLeft:wp('10%')
    },
    adress:{
      fontSize:15,
      marginLeft:wp('10%')
    },
    address:{
      color:'#a8aeb2'

    },
    descr:{
      color:'#a8aeb2'


    },
        btn:{
            width: wp('60%'),
            marginTop:hp('15%'),
            borderRadius:20,
            borderWidth:10,
            borderColor:'#1E90FF',
            position:'absolute',
            marginTop:hp('80%'),position:'absolute',marginLeft:wp('20%')

        },

    
   
   

    
   
   
    
    bg:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('2'),
        marginLeft: wp('2'),
         
    },
    img:{
         height: hp('20%'),
    width: wp('20%'),
    marginTop: hp('-20%'),
    marginLeft:wp('30%')

        
    },
   

   

});