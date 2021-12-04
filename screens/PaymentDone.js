import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PaymentDone = ({navigation}) => {
    return (
        <View style={styles.container}>
<Image style={styles.img} source={require('../assets/icons/payment.png')} />  
<View>
    <Text style={{fontSize:20,fontWeight:"700",color:'black'}}>Payment Done</Text>

</View>

<View style={styles.btn}>
    
    <Button title="Go to Home" onPress={()=> navigation.navigate("HomeScreen")}/>
    </View>

        </View>
    )}
    export default PaymentDone;

    const styles = StyleSheet.create({
        container:{
     
           backgroundColor: '#ebf3f9',
            justifyContent:"center",
            alignItems:"center",
            height:hp('100%'),
            width:wp('100%'),
            marginTop:hp('-5%')
            
           
     
        },
        img:{
            height:hp('30%'),
            width:wp('50%'),
            

        },
        btn:{
            width: wp('60%'),
            marginTop:hp('15%'),
            borderRadius:20,
            borderWidth:5,
            borderColor:'#2196f3',
            marginTop:hp('20%'),marginLeft:wp('5%')

    
    
          },
    })