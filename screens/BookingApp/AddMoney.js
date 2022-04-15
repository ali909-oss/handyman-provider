import React,{useState} from "react";
import { View,Text ,TextInput,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import SaveBill from "../../components/SaveBill";
import Deals from "../../components/Deals";
const Data =[{
    Id:'$35.0'
}] 
const AddMoney = ({ navigation }) => {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={{marginTop:hp('4%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <TextInput
           placeholder="Enter Amount"
      value={text}
      numberOfLines={1}
      onChangeText={text => setText(text)}
      style={{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:widthPercentageToDP('50%'),
        marginLeft:widthPercentageToDP('5%'),
        fontSize:20

      }}
    />
    <TouchableOpacity>
    <Text style={{fontSize:16,color:'blue',marginLeft:wp('5%')}}>Have Promo code?</Text>
    </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.button}>
      <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Add Money</Text>
      </LinearGradient>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,color:'blue',fontWeight:'bold'}}>Balance : </Text>
      <Text style={styles.htext}>{Data && Data[0].Id}</Text>
      </View>
      <View style={{marginTop:hp('5%')}}>
      <Text style={{padding:5,fontSize:16,color:'black',fontWeight:'bold',marginLeft:wp('3%')}}>Deals of the Day</Text>
       <Deals/>
       </View>



        </View>
    )}
export default AddMoney;

const styles = StyleSheet.create({

    container:{
        width:wp('100%'),
        height:hp('100%'),
    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
      },
      button: {
        width:wp('70%') ,
        height:hp('7%'),
       marginLeft:wp('13%'),
       marginTop:hp('4%')
      },
      text: {
        color: 'white',
        fontSize: 16
      },
      htext:{
        fontSize:20,
        fontWeight:'400',
        textAlign:'center',
        color:'black',
        fontWeight:'700'
  
      },

})