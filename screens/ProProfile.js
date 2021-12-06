import React ,{useState} from 'react';
import { StyleSheet, View, Text, Button,SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import DropDownPicker from 'react-native-dropdown-picker';
import Aboutyou from '../components/AboutYou';
import LocationSer from '../components/ProviderLocation';
import NameY from '../components/name';
import EmailY from '../components/Emai';
import Phonenum from '../components/Phonenum';









const ProProfile = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {label: 'Home Cleaning', value: 'Home Cleaning'},
    {label: 'Carpanter', value: 'Carpanter'}
  ]);

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            
                          <Text style={{fontSize:30,textAlign:'center',color:'black',fontWeight:'700',marginTop:hp('5%')}}>My Profile</Text>

                 </View>
                 <View style={styles.footer}>
                 <View style={{height:hp('75%')}}>
               <ScrollView >
                    <View style={{marginTop:hp('5%')}}>
                       
            <NameY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <EmailY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <Phonenum/>
            </View>
         
    <Aboutyou/>
    <View style={{marginTop:hp('2%')}}>
    <LocationSer/>
    </View>
    <View>
    <Text style={{marginLeft:wp('2%'),marginTop:hp('4%')}}>Charges</Text>
    <Text style={{fontSize:20,marginLeft:wp('5%'),color:'black',fontWeight:'500',marginTop:hp('2%')}}>Enter Cost</Text>
    <TextInput style={{fontSize:15,textAlign:'center',borderColor:'black',borderWidth:1,borderRadius:10,width:wp('30%'),marginLeft:wp('15%'),marginTop:hp('2%')}} placeholder="Enter your Cost"/>
    </View>
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <View style={styles.btn}>
                  <Button  title="Save info" onPress={()=> navigation.navigate("BookingProvider")} />
              </View>
              </View>
                    
            </ScrollView>  
            </View> 
            </View>
       
      




           
       
      

    </SafeAreaView>
    
    
  );
}

export default ProProfile;

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:50,
        backgroundColor:'white'
    },
    footer:{
        flex: 6,
        backgroundColor: '#f8f9fd',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        marginTop:hp('-5%')
    },
    texta:{
        fontSize:20,
        color:'#abaeb1',
        marginTop:hp('-3%')
      },
    
      name:{
        fontSize:18,
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    main:{
        height: hp('50%'),
        marginTop: hp('3%'),
        width: wp('90%'),
        
        marginLeft:wp('5%'),
      
        justifyContent:'space-around'
        

    },
    btn:{
        width: wp('60%'),
        borderRadius:20,
        borderWidth:10,
        borderColor:'#2196f3',
        marginTop:hp('6%'),
        overflow:"hidden",
       


      },
   



    
   
   

    
   
   
    
    bg:{
        height: hp('25%'),
        width: wp('120%'),
        marginTop: hp('1%'),
        marginLeft: wp('-2%'),
         
    },
    img:{ height: hp('20%'),
    width: wp('25%'),
    marginTop: hp('-20'),
   marginLeft:wp('40%')
        
    },
   

   

});