import React from "react";
import { View,Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList  } from "@react-navigation/drawer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const CustomDrawer =(props,navigation) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView
         {...props}
         contentContainerStyle={{backgroundColor:'white',padding:20}}>
         <Image style={styles.imagehead} source={require('../assets/icons/img1.png')} />
         <View style={{flexDirection:'column',marginLeft:wp('25%'),marginTop:hp('-6%')}}>
         <Text style={styles.texta}>Ali Hafeez</Text>
         <Text style={styles.texta}>@ali909</Text>

         </View>
        
         <View style={{flex:1,marginTop:hp('4%')}}>
            <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
           <TouchableOpacity  style={{flexDirection:'row',marginTop:hp('2%'),padding:10}}>

            <FontAwesome 
                       name={"sign-out"} size={25} color="blue" />
                                  <Text onPress={()=> navigation.navigate("HomeScreen")} style={{color:'blue',fontSize:20,marginLeft:wp('2%')}}>Sign Out</Text>

                       </TouchableOpacity>
          
           
       </View>
        
    )
}

export default CustomDrawer;

const styles=StyleSheet.create ({
    imagehead: {
        height: hp('12%'),
        width: wp('18%'),
        borderRadius: 32,
        marginLeft:wp('5%')



    },
    texta:{
        fontWeight:'500',
        fontSize:18,
        color:'black'


    }

})