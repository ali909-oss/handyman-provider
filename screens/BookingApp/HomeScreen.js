import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Money from "../../components/Money";
import QuickBill from "../../components/QuickBill";
import SaveBill from "../../components/SaveBill";


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
                <Image style={{ width: wp('100%'), height: hp('15%') }} source={require('../../assets/icons/header.png')} />
                <View>
                    <TextInput
                        placeholder=""
                        style={styles.input}


                    />
                    <Image style={{ width: wp('13%'), height: hp('7%'), marginTop: hp('-7%'), marginLeft: wp('8%') }} source={require('../../assets/icons/logob.png')} />
                   
                </View>
                <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                >
               
                <View style={{marginTop:hp('-4%')}}>
                <QuickBill/>


                </View>
                <View style={{marginTop:hp('4%')}}>
                <Money/>


                </View>
                <View style={{marginTop:hp('-4%')}}>
                <SaveBill/>


                </View>
                </ScrollView>



                

               
              

            </View>
            
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height:hp('90%')

    },
    input: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('-13%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'center'


    }

})