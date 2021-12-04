import { jsxOpeningElement } from '@babel/types';
import React from 'react';
import { StyleSheet,Button, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import NameY from '../components/name';
import Phonenum from '../components/Phonenum';
import EmailY from '../components/Emai';
const Register = ({navigation}) => {
       
      
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View>
          <Image style={styles.img1} source={require('../assets/icons/Vector.png')} />
         </View>
          <View style={{marginLeft:wp('-50%'),marginTop:hp('-10%')}}>
          <Text style={{fontSize:25,color:'black'}}>Register Now</Text>
           </View>
      
      


              </View>


          <View style={styles.footer}>
            <View style={{marginTop:hp('5%')}}>
            <NameY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <EmailY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <Phonenum/>
            </View>
            <View style={{marginTop:hp('10%')}}>
              <Text style={{fontWeight:'300',fontSize:15}} >We"ll send you Verification Code</Text>
            </View>
            <View style={styles.btn}>
    
    <Button title="Continue" />
    </View>
              
              </View>
              </SafeAreaView>
    )}
export default Register;

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'black',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer:{
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
    img1:{
        height: hp('15%'),
        width: wp('35%'),
        marginLeft: wp('50%'),
        marginTop:hp('-10%')



     
    },
    btn:{
        width: wp('60%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
       marginLeft:wp('4%'),
       marginTop:hp('5%')



      },
      
});
