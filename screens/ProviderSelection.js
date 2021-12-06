import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

import CheckBox from '@react-native-community/checkbox';



const DATA = [

    {
        title: 'Carpet Shampooing',
        price: '$250 onwards',
        id: '1',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'first'





    },
    {
        title: 'Bath Cleaning',
        price: '$250 onwards',
        id: '2',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'second'






    },
    {
        title: 'Full Home Deep Cleaning',
        price: '$250 onwards',
        id: '3',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'Third'






    },
    {
        title: 'Sofa Shampooing',
        price: '$250 onwards',
        id: '4',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'Fourth'






    },
    {
        title: 'Toilet Cleaning',
        price: '$250 onwards',
        id: '5',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'Fifth'






    },
    {
        title: 'Floor Polising',
        price: '$250 onwards',
        id: '6',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'Sixth'






    },
    {
        title: 'Home Cleaning',
        price: '$250 onwards',
        id: '7',
        image1: require("../assets/icons/user.jpg"),
        CheckBox:'Seventh'






    },
]

const SPACING = 5;



const ProviderSelection = ({ navigation }) => {
    const [first, setfirst] = useState(false)
    const [second, setfirst] = useState(false)
    const [Third, setfirst] = useState(false)
    const [Fourth, setfirst] = useState(false)
    const [Fifth, setfirst] = useState(false)
    const [Sixth, setfirst] = useState(false)
    const [Seventh, setfirst] = useState(false)

   
    



    return (
        <View style={styles.container}>

            <View style={styles.header}>


                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
                <View>
                    <AntDesign
                        onPress={() => navigation.navigate("ServicesPro")} style={{ marginTop: hp('-22%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                </View>
                <View>
                    <Text style={styles.texta}>Home Clean</Text>
                </View>

                <View style={styles.img2}>
                    <Image source={require('../assets/icons/Vector8.png')} />
                </View>
            </View>

            <View style={styles.footer}>
           


               
               


            <View style={{
                marginTop: hp("1%"),
                width: wp('100%'), height: hp('70%')
            }}>
                <FlatList

                    data={DATA}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity >

                                <View style={styles.main}>
                                    <Image source={item.image1} style={styles.image1} />


                                    <View style={styles.Imageholder}>


                                        <Text style={styles.Name} >{item.title}</Text>
                                        <Text style={styles.charges} >{item.price}</Text>


                                        
                
               





                                    </View>
                                    <CheckBox  style={styles.checkbox}
                    disabled={false}
                    value={item.CheckBox}
                    onValueChange={(value) => setToggleCheckBox(value)}></CheckBox>
                    
                



                                </View>
                            </TouchableOpacity>

                        )
                    }} />

                    

            </View>

        </View>


        </View >

    )
}






const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ebf3f9',
        height: hp('100%'),
        width: wp('100%')

    },
    main: {
        height: hp('12%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding: SPACING,
        marginBottom:-2,
        backgroundColor: '#ffffff',
        borderRadius: 19,
        marginLeft: wp('5%')
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf3f9',
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#f8f9fd',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: hp('-5'),
        alignItems: 'center',




    },
    img1: {
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('10'),




    },
    img2: {
        marginLeft: wp('45'),
        marginTop: hp('-15'),




    },
    texta: {
        fontSize: 23,
        fontWeight: '500',
        color: 'black',
        marginTop: hp('-12%'),
        marginRight: wp('50'),
        fontFamily: 'Poppins'
    },
    image1: {
        height: hp('8%'),
        width: wp('14%'),
        marginLeft: wp('2%'),


    },
    Imageholder: {
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'center'




    },
    Name: {
        fontSize: 15,
        fontWeight: '700',
        color: '#4d4d4d',
        marginLeft: wp('10%'),
        textAlign: 'center',
        fontFamily: 'Poppins',
        marginTop: hp('-8%')



    },
    checkbox: {
        marginTop: hp('-8%'),
        marginLeft: wp('80%'),


    },
    charges: {
        marginLeft: wp('-15%'),
        marginTop: hp('-5%')



    },
    image2: {
        height: hp('3%'),
        width: wp('3%'),
        marginLeft: wp('10%'),
        marginTop: hp('3%')


    }

});

export default ProviderSelection;
