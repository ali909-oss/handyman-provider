import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data=[
    {
        paragraph:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, seolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
         id:1,
     },

]
const PrivacyPolicy = ({ navigation }) => {
    return (
        <View style={styles.container}>
             




            <View style={styles.header}>
            <View style={{marginTop: hp('2%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
                    <Text style={styles.texta}>Privacy Policy</Text>
                <Text style={styles.textb}>How we work</Text>
                </View>




            <View style={styles.footer}>
            <View style={{marginTop:hp('4%')}}>


                

            <Text style={styles.textaa}>Term of use</Text>
            <View style={{marginTop:hp('2%'),height:hp('50%')}}>
                    <FlatList
                    data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    <Text style={styles.name}>{item.paragraph}</Text>

                    <View>
                        <Text style={styles.textp}>Privacy Policy</Text>
                        <Text style={styles.name}>{item.paragraph}</Text>


                    </View>


                   
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

    export default PrivacyPolicy;

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    texta:{
        fontSize:35,
        fontWeight:'700',
        color:'blue',

           
       
           
       },
       textaa:{
        fontSize:25,
        fontWeight:'700',
        color:'blue',
           marginLeft: wp('2%'),

           
       
           
       },
       textp:{
        fontSize:25,
        fontWeight:'700',
        color:'blue',
           marginLeft: wp('2%'),
           marginTop:hp('5%')

           
       
           
       },
       textb:{
        fontSize:15,
        color:'#505050',

       


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
        padding:20
        

        




    },
    

});
