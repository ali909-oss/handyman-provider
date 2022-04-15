import React from "react";
import {View,Text,StyleSheet,TextInput,Image} from 'react-native' 
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

const Data=[
    {
        image: require("../../assets/icons/qrcode.png"),
        username:'Samantha Smith',
        phone:'+987 567 7678'

    }
]
const Qrcode = ({ navigation }) => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.texta}>Scan this code to Pay</Text>
            <View>
            {Data.map(data => (
                <View>
                  <Image source={data.image} style={styles.image1} />
                  <View style={{flexDirection:'column',justifyContent:'center',textAlign:'center',alignItems:'center',marginTop:hp('2%')}}>
                      <Text style={styles.textb}>{data.username}</Text>
                      <Text style={styles.textb}>{data.phone}</Text>
                      </View>
                      </View>
                  )
            )
}
            </View>
            <TouchableOpacity style={styles.button}>
      <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Download Qrcode</Text>
      </LinearGradient>
      </TouchableOpacity>

        </View>
    )}
export default Qrcode;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor:'#ffffff'

    },
    texta:{
        fontSize:20,
        justifyContent:'center',
        textAlign:'center',
        color:'black',
        marginTop:hp('4%')
    },
    image1:{
        height:hp('50%'),
        width:wp('100%'),
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'

    },
    textb:{
        fontSize:18,
        color:'black'
    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
      },
      button: {
        width:wp('80%') ,
        height:hp('7%'),
       marginLeft:wp('10%'),
       marginTop:hp('4%')
      },
      text: {
        color: 'white',
        fontSize: 18
      },
})
 