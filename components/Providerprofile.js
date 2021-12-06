import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const DATA = [

    {

        name: "Ali",
        id: "1",
        category:'Cleaner',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'$12/hr',
        trating:'4.5',

        


    },

]

const SPACING=10;

const Providerprofile = ({navigation}) => {
    return (
        <View style={{height:hp('50%'),marginTop:hp('-12%'),marginLeft:wp('5%')}}>
      <FlatList
      
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
            <View style={styles.main}>
                
                
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.des}>{item.description}</Text>


                <View style={styles.Imageholder}>
                <Text style={{color:'#cccccc',fontSize:18}}>Jobs</Text>
                <Text style={{color:'#cccccc',fontSize:18}}>Price</Text>
                <Text style={{color:'#cccccc',fontSize:18}}>Rating</Text>
                </View>
                <View style={styles.Imageholder1}>
                <Text style={{color:'black'}}>{item.tjobs}</Text>
                <Text style={{color:'black'}}>{item.tprice}</Text>
                
                <Text style={{color:'black'}}>{item.trating}</Text>

                
                </View>
                <FontAwesome style={{marginTop:hp('-4%'),marginLeft:wp('54%')}}
         name={"star"} size={20} color="#ffa534" /> 
                </View>
        )
      
      
      }
      />
      <View style={styles.btn}>
                  <Button  title="Hire Request" onPress={()=> navigation.navigate("BookingProvider")} />
              </View>
      </View>
      

    
    
  );
}
export default Providerprofile;

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
        height: hp('30%'),
        width: wp('90%'),
        padding:SPACING,
        backgroundColor:'white',
        borderRadius:19,
        marginTop:hp('20%')
    },
    btn:{
        width: wp('60%'),
        borderRadius:20,
        borderWidth:10,
        borderColor:'#2196f3',
        position:'absolute',
        marginTop:hp('55%'),
        overflow:"hidden",
        marginLeft:wp('18%')
       


      },
   

    
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black'
    },
    name1:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
        marginTop: hp('-20'),


    },
   
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        width: wp('60%'),
        marginLeft: wp('8%'),
        marginTop:hp('-2%')

       

        


    },
    Imageholder1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        width: wp('60%'),
        marginLeft: wp('8%'),
        marginTop:hp('-1%')

       

        


    },
    image1:{
        height: hp('18%'),
        width: wp('34%'),
        marginTop: hp('-20'),

    },
    category:{
     color:'#a8aeb2',
     fontSize:15,
     padding:5
    },
    des:{
        color:'#a8aeb2',
        padding:10

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
        justifyContent:'flex-start',
        marginLeft: wp('-25'),

    },
    username:{
        marginTop:hp('-10'),
        color:'black'

    },
    date:{
        color:'#a8aeb2'


    },
    userdes:{
        color:'#a8aeb2',
        marginLeft: wp('-25'),
        marginTop: hp('8'),





    },
   

});