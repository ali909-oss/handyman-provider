import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';

const Data=[
    {
        title:'Get 25% cashback on first electricity Bill',
        time:"2 Days ago"

    },
    {
        title:'You have received 15% cashback on first electricity Bill',
        time:"2 Days ago"

    },
    {
        title:'Your Order has been received',
        time:"2 Days ago"

    },
    {
        title:'Get 25% cashback on first electricity Bill',
        time:"2 Days ago"

    },
    {
        title:'You have received 5% cashback on first electricity Bill',
        time:"2 Days ago"

    },
    {
        title:'Your Order has been received',
        time:"2 Days ago"

    },
    {
        title:'Get 25% cashback on first electricity Bill',
        time:"2 Days ago"

    },
    {
        title:'You have received 5% cashback on first electricity Bill',
        time:"2 Days ago"

    },
]
const Notification=() =>{
    return(
        <View style={styles.container}>
            <View style={{height:hp('80%'),marginTop:hp('2%')}}>
             <FlatList
            
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(

                <View style={styles.main}>   
                <View style={{flexDirection:'column',padding:4}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    </View>
                    </View>
                    
            )}
            />
            </View>
        </View>
    )
}

export default Notification;
const styles = StyleSheet.create({

    container:{
        height:hp('80%'),
        width:wp('100%'),
    },
    main:{
        height:hp('12%'),
        width:wp('90%'),
        marginLeft:wp('5%'),
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:5,
        marginBottom:5,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',

    },
    time:{
        fontSize:14

    }
})