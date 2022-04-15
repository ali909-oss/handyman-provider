import React from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native' 
import ScanScreen from '../../components/Qrcode'
import DefaultScreen from "../../components/Qrcode";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
 
const Scan = ({ navigation }) => {
    return (
        <View style={styles.container }>
 <View style={{flexDirection:'row'}}>
                    <TextInput
                        placeholder="Enter Your Phone Number"
                        style={styles.input}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    <TouchableOpacity>
                    <AntDesign style={styles.searchIcon} name="contacts" size={30} color="#21bbf8" />
                    </TouchableOpacity>
                </View>    
                        <View style={{marginTop:hp('10%')}}>
            <DefaultScreen/>      
            </View>
                  </View>
    )}

export default Scan;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor:'#ffffff'

    },
    input: {
        borderBottomColor:'black',
        borderBottomWidth:1,
        width: wp('80%'),
        height: hp('8%'),
        marginTop: hp('1%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'left'
    
    
    },
    searchIcon:{
        marginTop:hp('4%'),
        borderBottomColor:'black',
        borderBottomWidth:1,
        width: wp('10%'),
        padding:2


    }

})