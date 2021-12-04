import React from 'react';
import { StyleSheet, View, Text, Button,FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SeriveRequest = ({navigation}) => {
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
               
                
                 <View >
                <Text  onPress={()=> navigation.navigate("HomeCleanProvider")} style={styles.textas}>SKIP</Text>
                </View>

                 <View>
                 <Text style={styles.texta}>Service Request</Text>
                  </View>
                  <View>
                 <Text style={styles.textb}>Let us know the problem</Text>
                 </View>


                 <View >
                <Image style={styles.img2} source={require('../assets/icons/Layer.png')} />
                </View>

                    
                 
                </View>

                <View style={styles.footer}>
                    
                <Text style={styles.textdetail}>Describe What Problems you are facing by uploading few images and write some details about it</Text>
                

                <View>
                <Text style={styles.comment}>Write Short Description</Text>
                <TextInput
            style={styles.input}
            placeholder="Share Your Experience (Optional)"
            placeholderTextColor="#b3b3b3"
            />
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate("HomeCleanProvider")}>
                 <View style={styles.Button}>
                     <Text style={styles.btntext}>Find Provider</Text>
                </View>
                </TouchableOpacity>
                  
                </View>



                </View>

)
}

export default SeriveRequest ;



const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    header: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
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
    texta:{
        fontSize:25,
        fontWeight:'500',
        color:'#505050',
        marginTop: hp('-28'),
           marginRight: wp('45'),
       },
       textas:{
        fontSize:20,
        fontWeight:'500',
        color:'purple',
        marginTop: hp('-35%'),
           justifyContent:'flex-end',
           marginLeft:wp('70%')
       },
       textb:{
        fontSize:17,
        color:'#a3bccf',
        marginTop: hp('-22'),
           marginRight: wp('45'),
            
       },
       img2:{
        height: hp('20%'),
        width: wp('25%'),
        marginTop: hp('-20'),
        marginLeft: wp('60'),




       
    },
    textdetail:{
        color:'#4d4d4d',
        fontSize:18,
        marginTop: hp('3'),
        alignItems:'center',
        justifyContent:'center'

        
    },
    comment:{
        color:'#4d4d4d',
        fontSize:20,
        marginLeft: wp('1'),

    },
    input:{
        
    borderBottomWidth:1,
    fontSize:20,
    width: wp('90%'),





    },
    Button:{
        width: wp('80%'),
        height: hp('8%'),

        borderRadius:15,
        marginTop: hp('10'),
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#69c4ff',
        borderColor:'#69c4ff'


        





      
    },
    btntext:{
        color:'#fff',
        fontSize:25,
        textAlign:'center',
        marginTop: hp('1'),



    },

});