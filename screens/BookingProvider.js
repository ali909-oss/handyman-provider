import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DatenTime } from '../components/DatenTime';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
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
        <View>
            <AntDesign
                     onPress={()=> navigation.navigate("ProviderProfile")}   style={{marginTop: hp('4%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
         
       

       
       
       <View style={{    marginTop: hp('-12%'),
}}>
        <Image style={styles.img} source={require('../assets/icons/download23.png')} />    
        </View>
        <View style={{marginTop:hp('-14%'),marginLeft:wp('-50%')}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>John Kk</Text>
          <Text style={{fontSize:16,color:'black',marginTop:hp('5%')}}>Rate: ₦12/hr</Text>
          </View>


            </View>


            <View style={styles.footer}>
                
            <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height:hp('60%'),
          marginTop:hp('-2%')
        }}
      >
      
         <FlatList
            
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.address}>Address</Text>

                    <Text style={styles.adress}>{item.adress}</Text>
                    <Text style={styles.descr}>Description</Text>



                    <Text style={styles.category}>{item.description}</Text>

  
              

                    
        
                    
                </View>
                

            )
            
          
          
          }
          
          
          />
          
          
          </View>
          
    

           
      
     
        
    
<View style={{marginTop:hp('-2%')}}>
    <DatenTime/>
    </View>
     <View style={styles.btn}>
    
    <Button title="Confirm Booking" onPress={()=> navigation.navigate("BookingConfirm")}/>
    </View>
    
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
        marginTop:hp('4%')
    
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
        height: hp('40%'),
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
      marginLeft:wp('10%'),
      padding:5
    },
    category:{
      fontSize:15,
      marginLeft:wp('10%'),
      padding:5,

    },
    address:{
      color:'#a8aeb2',
      fontSize:16

    },
    descr:{
      color:'#a8aeb2',
      fontSize:16


    },
        btn:{
            width: wp('60%'),
            marginTop:hp('15%'),
            borderRadius:20,
            borderWidth:8,
            borderColor:'#1E90FF',
            marginTop:hp('-20%'),marginLeft:wp('8%')

        },

    
   
   

    
   
   
    
    bg:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('2'),
        marginLeft: wp('2'),
         
    },
    img:{
         height: hp('18%'),
    width: wp('20%'),
    marginTop: hp('12%'),
    marginLeft:wp('30%')

        
    },
   

   

});