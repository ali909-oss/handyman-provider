import { jsxOpeningElement } from '@babel/types';
import React from 'react';
import { StyleSheet,Button, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Phonenum from '../components/Phonenum';
const Login = ({navigation}) => {
       
      
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.img1} source={require('../assets/icons/Splash2.png')} />

         
      
      


              </View>


          <View style={styles.footer}>
              <View>
                  <Text style={{fontSize:15}}>Sign in Now</Text>
              </View>
              <View style={{marginTop:hp('5%')}}>
              <Phonenum/>
              </View>
              <View style={styles.btn}>
    
    <Button title="Continue" onPress={()=> navigation.navigate("RegisterScreen")}/>
    </View>
    <View>
    <Text style={{fontSize:15,marginTop:hp('2%')}}>Or Continue with</Text>

    </View>
    <View style={{ flexDirection: "row" }}>
                    <View style={styles.btn1}>

                        <Button title="Facebook" 
                        
                        />
                      

                    </View>
                    <View style={styles.btn1}>

                        <Button title="Google" />
                        
        
        
</View>
              </View>
              </View>
              </SafeAreaView>
    )}
export default Login;

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
       backgroundColor:'white',
        paddingBottom:50
    },
    footer:{
        flex: 2,
        backgroundColor: '#ebf3f9',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
    img1:{
        height: hp('25%'),
        width: wp('45%'),
        marginLeft: wp('2%'),



     
    },
    btn:{
        width: wp('60%'),
        marginTop:hp('10%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
       marginLeft:wp('4%')



      },
      btn1:{
        width: wp('45%'),
        marginTop:hp('10%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
       marginLeft:wp('4%'),



      },
});
