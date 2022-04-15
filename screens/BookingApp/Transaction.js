import React,{useState} from "react";
import { View,Text ,TextInput,StyleSheet} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import SaveBill from "../../components/SaveBill";
import Deals from "../../components/Deals";
import Transactionn from "../../components/Transactionn";
const Data =[{
    Id:'$35.0'
}]
 
const Date =[{
    date:'Today 20th Jan,2021',

}]



const Transaction = ({ navigation }) => {
    const [text, setText] = React.useState('');
    return (
        
        <View style={styles.container}>
             <View style={{marginTop:hp('5%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:25,color:'blue',fontWeight:'bold'}}>Balance : </Text>
      <Text style={styles.htext}>{Data && Data[0].Id}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <TouchableOpacity style={styles.button}>
      <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Sent to Bank</Text>
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Add Money</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
      
      <View>
      <Text style={styles.date}>{Date && Date[0].date}</Text>
      <Transactionn/>


      </View>
     
        </View>

    )}
export default Transaction;
const styles = StyleSheet.create({

    container:{
        width:wp('100%'),
        height:hp('85%'),
        backgroundColor:'white'
    },

gradient: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
  },
  button: {
    width:wp('40%') ,
    height:hp('7%'),
   marginLeft:wp('2%'),
   marginTop:hp('4%')
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  htext:{
    fontSize:30,
    fontWeight:'400',
    textAlign:'center',
    color:'black',
    fontWeight:'700'

  },
  date:{
    fontSize:17,
    fontWeight:'400',
    color:'black',
    fontWeight:'700',
    backgroundColor:'lightgrey',
    padding:10,
    marginTop:hp('5%')

  },

})