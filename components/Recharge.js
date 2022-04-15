import { types } from "@babel/core";
import React from "react";
import {View,Text,FlatList,StyleSheet, Image} from 'react-native' 
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';

const Data=[
    {
        order:'221564',
        date:'02 Dec 2022',
        time:'6:45pm',
        price:'₦15.00',
        title:'Recharge Done',
        num:'+1-768-9865-4',
        image: require('../assets/icons/user.jpg')


    },
    {
        order:'221664',
        date:'04 Dec 2022',
        time:'6:25pm',
        price:'₦12.00',
        title:'Pending',
        num:'+1-768-9865-4',
        image: require('../assets/icons/user.jpg')


    },
    {
        order:'221664',
        date:'04 Dec 2022',
        time:'6:25pm',
        price:'₦12.00',
        title:'Pending',
        num:'+1-768-9865-4',
        image: require('../assets/icons/user.jpg')

    },
    {
        order:'221564',
        date:'02 Dec 2022',
        time:'6:45pm',
        price:'₦15.00',
        title:'Order Successful',
        num:'+1-768-9865-4',
        image: require('../assets/icons/user.jpg')


    },
]

const Recharge = ({ navigation }) => {
    return (
        <View style={styles.container } >
                  <View style={{height:hp('72%')}}>
            <FlatList
            
              data={Data}
              keyExtractor={item => item.id}
              renderItem={({item}) =>(
                  <View style={styles.main}>   
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'column'}}>
                          <Text style={styles.order}>Order Number: {item.order}</Text>
                          <View style={{flexDirection:'row',padding:2}}>
                          <Text style={styles.date}>{item.date}</Text>
                          <Text style={styles.time}>{item.time}</Text>
                          </View>

                      </View>
                      <Text style={styles.price}>{item.price}</Text>

                  </View>
                  <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                  <View style={{marginLeft:wp('4%')}}>
                  <Image source={item.image} style={styles.image} />
                  </View>
                  <View style={{flexDirection:'column',marginLeft:wp('10%')}}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.number}>{item.num}</Text>

                  </View>

                  </View>

                        </View>
              )}
              />
              </View>
              </View>
    )}

export default Recharge;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('85%'),

    },
    main:{
        height: hp('22%'),
        marginTop: hp('1%'),
        width: wp('90%'),
        padding:15,
        marginBottom:2,
        backgroundColor:'white',
        borderRadius:5,
        marginLeft:wp('5%')
    },
    image:{
        height:hp('6%'),
        width:wp('12%')
    },
    order:{
        fontSize:18,
        fontWeight:'bold',
        color:'#219ad7',
        padding:2

    },
    date:{
        fontSize:14,
        color:'#b3c2c5'
    },
    time:{
        fontSize:14,
        color:'#b3c2c5',
        marginLeft:wp('2%')

    },
    price:{
        fontSize:22,
        fontWeight:'bold',
        color:'#696969',
        padding:5
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#696969',
        padding:2
    },
    number:{
        color:'#c0c0c0',
        fontSize:15,
        
    }
})