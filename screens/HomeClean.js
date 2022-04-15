import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';



const DATA = [

    {
        title: 'Carpet Shampooing',
        price: '₦250 onwards',
        id: '1',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Bath Cleaning',
        price: '₦250 onwards',
        id: '2',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Full Home Deep Cleaning',
        price: '₦250 onwards',
        id: '3',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Sofa Shampooing',
        price: '₦250 onwards',
        id: '4',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Toilet Cleaning',
        price: '₦250 onwards',
        id: '5',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Floor Polising',
        price: '₦250 onwards',
        id: '6',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
    {
        title: 'Home Cleaning',
        price: '₦250 onwards',
        id: '7',
        image1: require("../assets/icons/img1.png"),
        image2: require("../assets/icons/right-arrow.png"),

        



    },
]

const SPACING=2;



const HomeClean = ({navigation}) => {
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
               
               
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
           <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('-22%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
                 <View>
                 <Text style={styles.texta}>Home Clean</Text>
                 </View>

                <View style={styles.img2}>
                <Image  source={require('../assets/icons/Vector8.png')} />
                </View>
                    </View>

                    <View style={styles.footer}> 

                    <View style={{ marginTop: hp("1%") ,
        width: wp('100%'),height:hp('70%')
    }}>
                <FlatList

                    data={DATA}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=> navigation.navigate("SeriveRequest")}>

                            <View style={styles.main}>

                            <View style = {styles.Imageholder}>
                                  
                            <Image source={item.image1} style={styles.image1} />
                             
                                 <Text style={styles.Name} >{item.title}</Text>
                           
                           
                            <Text style={styles.charges} >{item.price}</Text>
                            <Image source={item.image2} style={styles.image2} />
                           
                             

                            </View>
                            </View>
                            </TouchableOpacity>

                            )
                        }} />

                    </View>

</View>


        </View>

)
}






const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ebf3f9',
        height: hp('100%'),
        width: wp('100%')

    },
    main:{
        height: hp('13%'),
        marginTop: hp('3'),
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
        height: hp('10%'),
        width: wp('15%'),
        marginLeft: wp('1'),

      
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:12
        



    },
    Name:{
     fontSize:15,
     fontWeight:'700',
     color:'#4d4d4d',
     marginLeft: wp('10%'),
     textAlign:'center',
     fontFamily:'Poppins'



    },
    charges:{
        marginLeft: wp('-25%'),
        marginTop:hp('5%')


        
    },
    image2:{
        height: hp('3%'),
        width: wp('3%'),
        marginLeft: wp('10%'),
        marginTop:hp('3%')


    }

});

export default HomeClean;
