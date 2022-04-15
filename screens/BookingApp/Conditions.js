import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data = [
    {
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, seolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        id: 1,
    },

]
const TermsandConditions = ({ navigation }) => {
    return (
        <View style={styles.container}>














                <View style={{ marginTop: hp('2%'), height: hp('60%') }}>
                    <FlatList
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.main}>



                                <View>
                                    <Text style={styles.textp}>Terms of use</Text>
                                    <Text style={styles.name}>{item.paragraph}</Text>


                                </View>



                            </View>


                        )



                        }
                    />


                </View>
            </View>









    )
}

export default TermsandConditions;

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        padding:10
    },
    container: {

        height: hp('100%'),
        width: wp('100%')

    },
    texta: {
        fontSize: 30,
        fontWeight: '700',
        color: 'blue',



    },
    textb: {
        fontSize: 20,
        color: '#505050',




    },
    textaa: {
        fontSize: 25,
        fontWeight: '700',
        color: 'blue',
        marginLeft: wp('5%'),



    },

    textp: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: hp('1%'),
        padding:10,
        color:'black'




    },

    img1: {
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),




    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf3f9',
        paddingBottom: 50,


    },
    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 20,
        marginTop: hp('-5%')







    },
    main:{
        height:hp('90%'),
        width:wp('90%'),
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginLeft:wp('5%')
    }


});
