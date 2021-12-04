import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data=[
    {
        title:'Carpet Cleaning',
        id:1,
    detail:'Bank of USA',
        price:'$15',
        date:'21 Jun, 10:00 am'
    },
    {
        title:'Laptop Repair',
        id:2,
    detail:'Bank of USA',
        price:'$15',
        date:'21 Jun, 10:00 am'
    },
    {
        title:'Home Cleaning',
        id:3,
    detail:'Bank of USA',
        price:'$15',
        date:'21 Jun, 10:00 am'
    },
    {
        title:'Carpet Cleaning',
        id:4,
    detail:'Bank of USA',
        price:'$15',
        date:'21 Jun, 10:00 am'
    },
    {
        title:'Carpet Cleaning',
        id:5,
    detail:'Bank of USA',
        price:'$15',
        date:'21 Jun, 10:00 am'
    }
]
const SPACING=5;

const Wallet = ({navigation}) => {
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
                <View style={{marginTop: hp('6%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
               
               
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
               
                 <View style={{marginTop:hp('5%')}}>
                 <Text style={styles.texta}>$150.2</Text>
                 </View>
                 <Text style={styles.textb}>Available Balance</Text>

                 

                
                    </View>

                    <View style={styles.footer}> 
                    <View style={{marginTop:hp('2%'),height:hp('68%')}}>
                    <FlatList
                    data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    <Text style={styles.name}>{item.title}</Text>

                    <Text style={styles.detail}>{item.detail}</Text>
                    <View style={styles.Imageholder}>

                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    </View>

        
                    </View>
                    )
          
          
                }
                    />
                    </View>
                  
                    
                    </View>
                    
        </View>
)}

export default Wallet;

const styles = StyleSheet.create({
    name:{
        fontSize:18,
        fontWeight:"700"
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    main:{
        height: hp('13%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding:20,
        marginBottom:SPACING,
        backgroundColor:'#ebf3f9',
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
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:"space-between"



       
    },
    Imageholder:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding:15,
        marginLeft: wp('50%'),
        marginTop:hp('-7%')



        


    },
    texta:{
        fontSize:30,
        fontWeight:'500',
        color:'blue',
        marginTop: hp('-40%'),
           marginRight: wp('50%'),
           
       },
       textb:{
        fontSize:15,
        color:'#505050',
        marginTop: hp('-35%'),
           marginRight: wp('50%'),


       },
        
    img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },
    imagehead: {
        height: hp('12%'),
        width: wp('20%'),
        borderRadius: 39,
        marginTop:hp('-25%'),
marginLeft:wp('50%')


    },
    price:{
        fontSize:20,
        color:'#FF0000'

    },
    date:{
        color:'blue'

    },
    img2:{
        width:wp("5%"),
        height:hp('10%'),
    }
});
