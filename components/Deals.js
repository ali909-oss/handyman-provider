import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button, ScrollView, } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";

const Data = [
    {
        title: 'upto 80% Cashback every hour',
        id: '1',
        sub: 'Get Upto 80% Cashback on any Bill Payment every hour',
        info: '*Terms & Conditions Apply'


    },
    {
        title: 'upto 80% Cashback every hour',
        id: '2',
        sub: 'Get Upto 80% Cashback on any Bill Payment every hour',
        info: '*Terms & Conditions Apply'

    },
    {
        title: 'upto 80% Cashback every hour',
        id: '3',
        sub: 'Get Upto 80% Cashback on any Bill Payment every hour',
        info: '*Terms & Conditions Apply'


    },
    {
        title: 'upto 80% Cashback every hour',
        id: '4',
        sub: 'Get Upto 80% Cashback on any Bill Payment every hour',
        info: '*Terms & Conditions Apply'

    },



]

const Deals = ({ navigation }) => {
    return (

        <View style={{ height: hp('50%') }}>

            <FlatList
                data={Data}

                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => {

                    return (

                        <View style={styles.main}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.sub}>{item.sub}</Text>
                            <View style={styles.btn}>
                                <TouchableOpacity>

                                    <Button
                                        title="Know More"
                                        style={styles.btn}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.info}>{item.info}</Text>


                        </View>
                    )
                }} />
        </View>





    )
}

export default Deals;

const styles = StyleSheet.create({

    main: {
        height: hp('18%'),
        marginTop: hp('1%'),
        width: wp('90%'),
        padding: 5,
        marginBottom: 3,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: wp('5%')
    },
    image1: {
        height: hp('6%'),
        width: wp('15%')
    },
    Imageholder: {
        flexDirection: 'row',
        marginTop: hp('4%'),


    },
    name: {
        fontSize: 15,
        marginTop: hp('1%'),
        fontWeight: 'bold',
        padding: 5
    },
    texta: {
        fontSize: 15,
        color: '#f8f8ff',
        fontWeight: 'bold'
    },
    sub: {
        fontSize: 12,
        padding: 5,
        color: 'black'
    },
    info: {
        fontSize: 10,
        padding: 5,
        marginTop: hp('-2%')
    },
    btn: {
        width: wp('30%'),
        marginLeft: wp('50%')
    }


})