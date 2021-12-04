import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DATA = [

    {
        name: 'Home Clean',
          id: '1',
        image: require("../assets/icons/Vector8.png"),
         },
    {
        id:'2',
        name: 'Plumber',
        image: require("../assets/icons/Vector3.png"),
     },
    {
        id:'3',
        name: 'Movers',
        image: require("../assets/icons/Vector2.png"),
     },
    {
         id: '4',
        name: 'Painter',
        image: require("../assets/icons/Vector4.png"),
},
    {
        id:'5',
        name: 'Carpenter',
        image: require("../assets/icons/Vector5.png"),
 },
    {
        id:'6',
        name: 'Gardening',
        image: require("../assets/icons/Vector6.png"),
},
    {
        name: 'Electrician',
       id: '7',
        image: require("../assets/icons/Vector7.png"),
},
    
    {
        id:'8',
        name: 'Hair & Beauty',
        image: require("../assets/icons/Vector1.png"),
 },
    {
        id:'9',
        name: 'Home Sanitize',
        image: require("../assets/icons/Vector9.png"),
},
    







]




const ServicesPro = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.head}>
           
              <Text style={{fontSize:35,marginLeft:wp('20%'),color:'black'}}>Select Sevice</Text>
               
            </View>
            <View style={styles.footer}>
                <Text style={styles.texta}>Handyzone</Text>
                <Image style={styles.bgimg} source={require('../assets/icons/Vector12.png')} />

                <View style={styles.inputt}>

                    <TextInput style={styles.input}
                        placeholder="Search Service"
                        placeholderTextColor="#e7e8e8"
                    />
                   
                </View>
            </View>







            <View style={{ marginTop: hp("10%") ,height:hp('60%') }}>
                <FlatList
                    data={DATA}
                    numColumns={3}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        
                        return (
                                   <View style={{flex:1}}>
                                    <View style={styles.Imageholder}>
                                    <TouchableOpacity onPress={()=> navigation.navigate("ProviderSelection")}>
                                    <Image source={item.image} style={styles.image1} />
                                    <Text style={styles.name}>{item.name}</Text>
                                    
                                    </TouchableOpacity>

                                    
                                    </View>

                                    
                                    
                                    
                                    
                                    
                                
                                




                                
                                </View>
                               
                                

                       

                        )
                        
                    }} />
                    
            </View>

        </View>













    )
}



export default ServicesPro;



const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    head: {
        flexDirection: 'row',
        marginTop: hp('2'),
        marginLeft: wp('5'),


    },
    imagehead: {
        height: hp('7%'),
        width: wp('12%'),
        borderRadius: 39,
        marginLeft: wp('70%'),



    },
    imgmenu:{
        height: hp('4%'),
        width: wp('6%'),
      
    },
    headtext: {
        fontSize: 25,
        fontWeight: '500',
        color: '#8da1b2'

    },
    footer: {
        marginTop: hp('2'),


    },
    texta: {
        fontSize: 28,
        fontWeight: '700',
        color: 'black',

        textAlign: 'center'
    },

    bgimg: {
        height: hp('23%'),
        width: wp('100%'),

    },
    input: {
        height: hp('10%'),
        width: wp('70%'),
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green'


    },
    inputt: {
        marginTop: hp('-20%'),
        marginLeft: wp('15%'),




    },


    textin: {
        marginLeft: wp('2'),
        backgroundColor: '#ffffff',
        fontSize: 20,
        marginTop: hp('3'),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('80%'),
        borderRadius: 10,
        textAlign: 'center',
        height: 50
    },

    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('2%'),


    },
    
    name: {
        fontSize: 13,
        fontWeight:'bold'
        

    },
    Namesec: {
        fontSize: 20,
        marginLeft: wp('-15'),
        marginTop: hp('-2'),



    },
    Nameth:{
        fontSize: 20,
        marginLeft: wp('-25'),
        marginTop: hp('-2'),


   
    },

    image1: {
        height: hp('15%'),
        width: wp('12%'),
        marginTop: hp('3%'),
        resizeMode:'contain'

    },
    
    Main: {
        marginTop: hp('4$'),

    },
    
});