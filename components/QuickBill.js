import React ,{useState} from "react";
import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';


const Data=[
    {
        name: 'Recharge',
        id: '1',
        image: require("../assets/icons/phone.png"),
        page: 'Phone Recharge'
        },
    {
        name: 'Electricity',
        id: '2',
      image: require("../assets/icons/elect.png"),
      page: 'Electricity'


    },
    {
        name: 'Train Ticket',
        id: '3',
      image: require("../assets/icons/train.png"),
      page: 'BookTicket'

      

    },
    {
        name: 'Flights',
        id: '4',
      image: require("../assets/icons/flight.png"),
      page: 'BookTicket'


    },
    {
        name: 'Bus Ticket',
        id: '5',
      image: require("../assets/icons/bus.png"),
      page: 'BookTicket'


    },
    {
        name: 'Hotel',
        id: '6',
      image: require("../assets/icons/dth.png"),
      page: 'Book Hotel'


    },
    
    {
        name: 'Home Service',
        id: '8',
      image: require("../assets/icons/more.png"),
      page: 'More'

 
    },
]

const QuickBill = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
      setStatus(ss);
    }
    console.log(Status);


    return (
        <View >
            <View style={{marginTop:hp('5%')}}>
           
                <Image style={{width:wp('98%'),height:hp('36%'),marginLeft:wp('1%'),opacity:0.6,borderRadius:10,borderWidth:0.1}} source={require('../assets/icons/rob.jpg')} />
                <View style={{marginTop:hp('-35%'),marginLeft:wp('3%')}}>
           <Text style={styles.texta}>Quick Recharges and Bill Pays</Text>
           </View>
            <View style={styles.main}>
            {Data.map(data => (
               
              <View
                style={{
                 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:hp('5%'),
                    width: widthPercentageToDP('22%'),
                    height:hp('4%'),
                    borderRadius: 10, 
                    marginBottom:15
                                    
                }}>
                <TouchableOpacity onPress={() => navigation.navigate(data.page)}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={[
                        Status === data.name ? styles.cont : styles.mainview,
                      ]}>
                      <Image source={data.image} style={styles.image1} />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
               
           
            {/* <FlatList
                    data={Data}
                    numColumns={4}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        
                        return (
                                   <View style={{flex:1,marginTop:hp('-2%')}}>
                                    <View style={styles.Imageholder}>
                                    <TouchableOpacity onPress={()=>navigation.navigate(Status, {status: Status})} >
                                    <Image source={item.image} style={styles.image1} />
                                    <Text style={styles.name}>{item.name}</Text>
                                    
                                    </TouchableOpacity>

                                    
                            </View>

                                
                                </View>
                               
                                

                       

                        )
                        
                    }} /> */}


                
            </View>
            </View>

            </View>
    )
}

export default QuickBill;

const styles = StyleSheet.create({
   
    main:{
        height: hp('28%'),
        marginTop:hp('2%'),
        width: wp('95%'),
        padding:10,
        backgroundColor:'white',
        borderRadius:19,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 1,
        alignSelf:'center'


        
    },
    image1:{
        height:hp('6%'),
        width:wp('15%')
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('4%'),


    },
    name:{
        fontSize:13,
        marginTop:hp('1%'),
        fontWeight:'bold'
    },
    texta:{
        fontSize:15,
        color:'#f8f8ff',
        fontWeight:'bold'
    }

})