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



]

const SaveBill = ({ navigation }) => {
    return (
        <View >
            <View style={{ marginTop: hp('8%') }}>

                <Image style={{ width: wp('98%'), height: hp('36%'), marginLeft: wp('1%'), opacity: 0.6, borderRadius: 10, borderWidth: 0.1 }} source={require('../assets/icons/claud.jpg')} />
                <View style={{ marginTop: hp('-35%'), marginLeft: wp('3%') }}>
                    <Text style={styles.texta}>Save on Bill Payments</Text>
                </View>
                <View >

                    <FlatList
                        data={Data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        keyExtractor={(item) => { item.id }}
                        renderItem={({ item }) => {

                            return (
                                <TouchableOpacity>

                                <View style={styles.main}>
                                    <Text style={styles.name}>{item.title}</Text>
                                    <Text style={styles.sub}>{item.sub}</Text>
                                    <Text style={styles.info}>{item.info}</Text>
                                    
                                </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>




            </View>

        </View>
    )
}

export default SaveBill;

const styles = StyleSheet.create({

    main: {
        height: hp('18%'),
        marginTop: hp('1%'),
        width: wp('70%'),
        padding: 5,
        marginBottom: -4,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: wp('2%')
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
        padding: 5
    }

})