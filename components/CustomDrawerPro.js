import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import ProgressBar from 'react-native-progress/Bar';
const testData = [
    { id: '1', star: '5', percent: '45%' },
    { id: '2', star: '4', percent: '35%' },
    { id: '3', star: '3', percent: '25%' },
    { id: '3', star: '2', percent: '15%' },
    { id: '3', star: '1', percent: '5%' },


];
const name=[
    {
        user_name:'Ali Hafeez',
        rating:'4.5',
        image: require("../assets/icons/user.jpg")

    }
]
const CustomDrawerPro = (props, navigation) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                <FlatList
                        data={name}

                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>  (
                            <View style={{marginLeft:wp('2%')}}>
                                                        <Image source={item.image} style={styles.image} />

                            <Text style={{fontSize:20,color:'black',textAlign:'center',marginTop:hp('-5%')}}>{item.user_name}</Text>
                            <View style={{flexDirection:'row',marginLeft:wp('25%')}}>
                            <Text style={{fontSize:20}}>{item.rating}</Text>
                            <FontAwesome style={{marginLeft:wp('2%')}}
         name={"star"} size={25} color="#ffa534" />
         </View>
         </View>
                            

                        )
                        }
                        />
                    
                <View style={{ marginLeft: wp('-5%'), marginTop: hp('3%') }}>

                    <FlatList
                        data={testData}

                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>  (


                            <View >
                                <View style={styles.Imageholder}>
                                    <Text>{item.star}</Text>

                                    <ProgressBar style={{ marginTop: hp('1%'), marginLeft: wp('-15%'), justifyContent: 'center' }} progress={0.5} width={120} color={'#b7ea83'} borderWidth={0.3} borderColor={'black'} />
                                    <Text style={{ marginLeft: wp('-20%') }}>{item.percent}</Text>

                                </View>
                            </View>
                        )}
                    />
                </View>



                <View style={{ flex: 1, marginTop: hp('4%') }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('2%'), padding: 10 }}>

                <FontAwesome
                    name={"sign-out"} size={25} color="blue" />
                <Text onPress={() => navigation.navigate("HomeScreen")} style={{ color: 'blue', fontSize: 20, marginLeft: wp('2%') }}>Sign Out</Text>

            </TouchableOpacity>


        </View>

    )
}

export default CustomDrawerPro;

const styles = StyleSheet.create({
    imagehead: {
        height: hp('10%'),
        width: wp('15%'),
        borderRadius: 32,
        marginLeft: wp('5%')



    },
    texta: {
        fontWeight: '500',
        fontSize: 18,
        color: 'black'


    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',




    },
    image:{
        height: hp('8%'),
        width: wp('16%'),
        
 



         
    },

})