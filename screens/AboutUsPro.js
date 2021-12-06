import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data=[
    {
        paragraph:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
         id:1,
     },

]
const AboutUsPro = ({ navigation }) => {
    return (
        <View style={styles.container}>
             




            <View style={styles.header}>
            <View style={{marginTop: hp('2%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("BookingScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
                 <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={styles.texta}>About Us</Text>
                <Text style={styles.textb}>Know Our Story</Text>
                </View>
                </View>




            <View style={styles.footer}>
            <View style={{marginTop:hp('4%')}}>


                

            <Text style={styles.textaa}>Our Mission</Text>
            <View style={{marginTop:hp('2%'),height:hp('40%')}}>
                    <FlatList
                    data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    <Text style={styles.name}>{item.paragraph}</Text>


                   
                    </View>

        
                    )
                   
          
          
                }
                    />
                     
                    
                    </View>
                    </View>


                </View>

                
                

                

</View>

    )
}

    export default AboutUsPro;

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        padding:20
        
        
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    texta:{
        fontSize:30,
        fontWeight:'700',
        color:'blue',
           
       
           
       },
       textb:{
        fontSize:20,
        color:'#505050',

       


       },
       textaa:{
        fontSize:25,
        fontWeight:'700',
        color:'blue',
           marginLeft: wp('5%'),
           
       
           
       },
       img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf3f9',
        paddingBottom:50,
        

    },
    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems:'center',
        marginTop:hp('-5%')

        




    },
    

});
