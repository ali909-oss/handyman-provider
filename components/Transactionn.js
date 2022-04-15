import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';



const DATA = [

    {
        title: 'Paid for Order',
        date: '3:18 pm | pre-paid recharge',
        id: '1',
        price:'-₦ 10.03',
        image1: require("../assets/icons/dollar.png"),

        



    },
    {
        title: 'Paid for Order',
        date: '3:18 pm | pre-paid recharge',
        id: '2',
        image1: require("../assets/icons/dollar.png"),
        price:'-₦ 10.03',

        



    },
    {
        title: 'Paid for Order',
        date: '3:18 pm | pre-paid recharge',
        id: '3',
        image1: require("../assets/icons/dollar.png"),
        price:'-₦ 10.03',

        



    },
    {
        title: 'Paid for Order',
        date: '3:18 pm | pre-paid recharge',
        id: '4',
        image1: require("../assets/icons/dollar.png"),
        price:'-₦ 10.03',

        



    },
    {
        title: 'Paid for Order',
        date: '3:18 pm | pre-paid recharge',
        id: '5',
        image1: require("../assets/icons/dollar.png"),
        price:'-₦ 10.03',

        



    },
    
]

const SPACING=2;



const Transactionn = ({navigation}) => {
    return (
        <View style={{backgroundColor:'#f9f9f9'}}>
             
               
                    
                    <View style={{ marginTop: hp("1%") ,
        width: wp('100%'),height:hp('50%')
    }}>
                <FlatList

                    data={DATA}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity >

                            <View style={styles.main}>
                            <Image source={item.image1} style={styles.image1} />


                            <View style = {styles.Imageholder}>
                                  
                             
                                 <Text style={styles.Name} >{item.title}</Text>
                           
                           
                            <Text style={styles.charges} >{item.date}</Text>
                            <Text style={styles.price} >{item.price}</Text>

                           
                             

                            </View>
                            </View>
                            </TouchableOpacity>

                            )
                        }} />

                    </View>

</View>



)
}






const styles = StyleSheet.create({
    
    main:{
        height: hp('12%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:-4,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%')
    },
    header: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer: {
        flex: 4,
        backgroundColor: '#f8f9fd',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-5'),
        alignItems:'center',



       
    },
    price:{
        marginTop:hp('2%')

    },
    img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },
    img2:{
        marginLeft: wp('45'),
        marginTop: hp('-15'),
        


       
    },
    texta:{
     fontSize:23,
     fontWeight:'500',
     color:'black',
     marginTop: hp('-16%'),
        marginRight: wp('50'),
        fontFamily:'Poppins'
    },
    image1:{
        height: hp('5%'),
        width: wp('10%'),
        marginLeft: wp('3%'),
        marginTop:hp('3%')

      
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:12,
        marginTop:hp('-8%')
        



    },
    Name:{
     fontSize:15,
     fontWeight:'700',
     color:'#4d4d4d',
     marginLeft: wp('15%'),
     textAlign:'center',
     fontFamily:'Poppins'



    },
    charges:{
        marginTop:hp('5%'),
        marginLeft:wp('-30%')


        
    },
    image2:{
        height: hp('3%'),
        width: wp('3%'),
        marginLeft: wp('10%'),
        marginTop:hp('3%')


    }

});

export default Transactionn;
