import React from 'react';
import { StyleSheet, View, Text, Button,FlatList,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Providerprofile from '../components/Providerprofile';
import ProviderReviews from '../components/ProviderReviews';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';










const ProviderProfile = ({navigation}) => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={styles.container}>

        <Image style={styles.bg} source={require('../assets/icons/download22.png')} />  
        <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeCleanProvider")}   style={{marginTop: hp('-24%'), marginLeft: wp('4%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
        <Image style={styles.img} source={require('../assets/icons/download23.png')} />    
        <Tab.Navigator tabBarOptions={{
        
        tabStyle: {
        marginTop:hp('3%'),
        },
        activeTintColor: 'blue',
        pressColor:'white',
        inactiveTintColor:'black',
        labelStyle: { fontSize: 15,fontWeight:'700' },
        style: { backgroundColor: 'white' },
      }}>
        
        <Tab.Screen name="Profile" component={Providerprofile} />
        <Tab.Screen name="Reviews" component={ProviderReviews} />
      </Tab.Navigator>
       
      




           
       
      

    </SafeAreaView>
    
    
  );
}

export default ProviderProfile;

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:50,
        backgroundColor:'#ebf3f9'
    },
    footer:{
        flex: 4,
        backgroundColor: '#ebf3f9',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
    },
    texta:{
        fontSize:20,
        color:'#abaeb1',
        marginTop:hp('-3%')
      },
      btn:{
        width: wp('60%'),
        borderRadius:20,
        borderWidth:10,
        borderColor:'#2196f3',
        position:'absolute',
        marginTop:hp('80%'),
        overflow:"hidden",
        marginLeft:wp('20%')
       


      },



    
   
   

    
   
   
    
    bg:{
        height: hp('25%'),
        width: wp('120%'),
        marginTop: hp('1%'),
        marginLeft: wp('-2%'),
         
    },
    img:{ height: hp('20%'),
    width: wp('25%'),
    marginTop: hp('-20'),
   marginLeft:wp('40%')
        
    },
   

   

});