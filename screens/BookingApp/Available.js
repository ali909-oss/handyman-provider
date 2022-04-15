import React ,{useState} from "react";
import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';


const Data=[
    {
        name: 'ABV-IBA Sprinter Service',
        id: '1',
        service:"Sprinter Service",
        person:'1',
        screen:'Non-video',
        time:'06:15 -----> 05:15',
        price:'10950.0 NGN,Per person',
        
        },
    {
        name: 'Jibowu Executive Sleeper ',
        id: '2',
        service:"Executive Service",
        screen:'LCD',
        person:'1',

        time:'06:15 -----> 05:15',
        price:'10950.0 NGN,Per person',


    },
    {
        name: 'ABV-IBA Sprinter Service',
        id: '1',
        service:"Sprinter Service",
        time:'06:15 -----> 05:15',
        screen:'LCD',
        person:'2',

        price:'10950.0 NGN,Per person',
        
        },
    {
        name: 'Jibowu Executive Sleeper ',
        id: '2',
        service:"Executive Service",
        screen:'Non-video',
        person:'2',


        time:'06:15 -----> 05:15',
        price:'10950.0 NGN,Per person',


    },
    {
        name: 'ABV-IBA Sprinter Service',
        id: '1',
        service:"Sprinter Service",
        time:'06:15 -----> 05:15',
        screen:'LCD',
        person:'2',


        price:'10950.0 NGN,Per person',
        
        },
    {
        name: 'Jibowu Executive Sleeper ',
        id: '2',
        person:'2',

        service:"Executive Service",
        time:'06:15 -----> 05:15',
        screen:'Non-video',

        price:'10950.0 NGN,Per person',


    },
  
]

const Services = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
      setStatus(ss);
    }
    console.log(Status);


    return (
        <View >
            <Text style={styles.texta}>Available Services</Text>
           
          
               
           <View style={{marginTop:hp('2%'),height:hp('80%')}}>
            <FlatList
                    data={Data}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        
                        return (
                                   <View style={styles.main}>
                                       <Text style={styles.textb}>{item.name}</Text>
                                       <View style={{flexDirection:'row'}}>
                                           <Text style={styles.service}>{item.service} ,</Text>
                                           <Text style={styles.service}>{item.screen},</Text>
                                           <Text style={styles.service}>Person:{item.person}</Text>


                                       </View>
                                       <Text style={styles.time}>{item.time}</Text>
                                       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={styles.mainprice}>
                                       <Text style={styles.price}>{item.price}</Text>
                                       </View>
                                       <TouchableOpacity>
                                       <View style={styles.booknow}>
                            <Text style={styles.book}>Book Now</Text>
                            </View>
                            </TouchableOpacity>
                            </View>

                                   </View>
                                

                       

                        )
                        
                    }} />
                    </View>


                
           
            </View>

            
    )
}

export default Services;

const styles = StyleSheet.create({
   
    main:{
        height: hp('20%'),
        width: wp('95%'),
        padding:10,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('2%'),
        padding:5,
        marginBottom:5
       
    },
    texta:{
        fontSize:22,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        marginTop:hp('2%')
    },
    textb:{
        fontSize:18,
        fontWeight:'700',
        color:'black',
        padding:3
    },
    service:{
        fontSize:15,
        padding:3
    },
    time:{
        fontSize:18,
        fontWeight:'700',
        padding:3
    },
    mainprice:{
        width:wp('50%'),
        height:hp('5%'),
        borderRadius:5,
        borderWidth:1,
        borderColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        
    },
    price:{
        fontSize:16,
        color:'blue'
    },
    book:{
        color:'#ffffff',
        fontSize:16
    },
    booknow:{
        backgroundColor:'#3f51b5',
        width:wp('25%'),
        height:hp('5%'),
        borderRadius:5,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        marginLeft:wp('2%'),
        
        
        
    },
})