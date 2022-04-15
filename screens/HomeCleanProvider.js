import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';


const DATA = [

    {

        name: "Ali",
        id: "1",
        category:'Home Clean',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'₦12/hr',
        trating:'4.5',
        image: require("../assets/icons/Layer2.png"),

        


    },
    {

        name: "Hamza",
        id: "2",
        category:'Home Clean',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'₦12/hr',
        trating:'4.5',
        image: require("../assets/icons/Layer3.png"),



    },
    {

        name: "fadii",
        id: "3",
        category:'Bath Clean',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'₦12/hr',
        trating:'4.5',
        image: require("../assets/icons/Layer4.png"),

       


    },
    {

        name: "Hassan",
        id: "4",
        category:'Bath Clean',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'₦12/hr',
        trating:'4.5',
        image: require("../assets/icons/Layer2.png"),

      

    },
    {

        name: "lari",
        id: "5",
        category:'Cleaner',
        jobs:'Jobs',
        price:'Price',
        rating:'Rating',
        tjobs:'183',
        tprice:'₦12/hr',
        trating:'4.5',
        image: require("../assets/icons/Layer2.png"),

    },
    
]



    


  const SPACING=15;

      const HomeCleanProvider = ({navigation}) => {
       
      
        return (
          <SafeAreaView style={styles.container}>
              <View style={styles.header}>
              <View style={{marginTop: hp('-2%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeClean")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
          
           <View style={{marginTop: hp('5%'),marginLeft: wp('-45')}}>
          <Text  style={styles.texthead}>Carpet Shampooning</Text>
          </View>
          


                  </View>


              <View style={styles.footer}>
                  <View style={{height:hp('75%')}}>
            <FlatList
            
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) =>(
                  <TouchableOpacity onPress={()=> navigation.navigate("ProviderProfile")}>
                  <View style={styles.main}>
                      
                      
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.category}>{item.category}</Text>
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
                      

                  <Image source={item.image} style={styles.image} />
                  <View>

                  <FontAwesome style={{marginTop:hp('-1%'),marginLeft:wp('40%')}}
         name={"star"} size={20} color="#ffa534" />
         </View>
                      
                  </View>
                  </TouchableOpacity>
              )
            
            
            }
            />
            </View>
            </View>

          </SafeAreaView>
        );
      }


export default HomeCleanProvider ;

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
       backgroundColor:'white',
        paddingBottom:50
    },
    footer:{
        flex: 4,
        backgroundColor: '#f8f9fd',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
    texthead:{
          fontSize:25,
          fontWeight:'700',
          marginLeft: wp('15'),
          color:'#4d4d4d',
          marginTop: hp('-5'),
          fontFamily:'Poppins'



    },
    main:{
        height: hp('20%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding:15,
        marginBottom:-4,
        backgroundColor:'white',
        borderRadius:19
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
        marginTop:hp('-1%')

        


    },
    Imageholder1:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        width: wp('60%'),
        marginTop:hp('-1%')


        


    },
    category:{
     color:'#a8aeb2',
     fontSize:17,
     padding:5
    },
    image:{
        height: hp('15%'),
       width: wp('20%'),
       marginTop: hp('-18'),
       marginLeft: wp('60'),



         
    },
   

});