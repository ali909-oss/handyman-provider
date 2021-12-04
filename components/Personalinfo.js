import React ,{useState}from 'react';
import { StyleSheet, View, Text,Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import Location from "./ProviderLocation";
import Aboutyou from "./AboutYou";


import Signin from '../components/Signin';

import NameY from '../components/name';
import EmailY from '../components/Emai';


const Personalinfo = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
  
    const [items, setItems] = useState([
      {label: 'Home Cleaning', value: 'Home Cleaning'},
      {label: 'Carpanter', value: 'Carpanter'}
    ]);
    
    return (
        <View style={styles.container}>
             <View style={{height:hp('70%')}}>
               <ScrollView >
                    <View style={{marginTop:hp('5%')}}>
                       
            <NameY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <EmailY/>
            </View>
            <View style={{marginTop:hp('5%')}}>
            <Signin/>
            </View>
            <View>
          <Text style={{fontSize:18,marginLeft:wp('3%'),color:'blue',marginTop:hp('2%')}}>Job Category</Text>
    <DropDownPicker
    style={{width:wp('80%'),marginLeft:wp('8%'),marginTop:hp('2%')}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    <Aboutyou/>
    <View style={{marginTop:hp('2%')}}>
    <Location/>
    </View>
    <View>
    <Text style={{marginLeft:wp('2%'),marginTop:hp('4%')}}>Charges</Text>
    <Text style={{fontSize:18,marginLeft:wp('5%'),color:'blue',marginTop:hp('2%')}}>Enter Cost</Text>
    <TextInput style={{textAlign:'center',borderColor:'black',borderWidth:1,borderRadius:10,width:wp('30%'),marginLeft:wp('15%'),marginTop:hp('2%')}} placeholder="Enter your Cost"/>
    </View>
    <View style={styles.btn}>
                  <Button  title="Save info" onPress={()=> navigation.navigate("BookingProvider")} />
              </View>
    </View>
                    
            </ScrollView>  
            </View>      
        </View>
)}

export default Personalinfo;

const styles = StyleSheet.create({
    name:{
        fontSize:18,
    },
    container: {

        backgroundColor: '#ebf3f9',
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
        marginLeft:wp('18%')
       


      },
    header: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,



       
    },
    texta:{
        fontSize:25,
        fontWeight:'500',
        color:'#505050',
        marginTop: hp('4%'),
           marginRight: wp('50'),
       },
    img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('45%'),
        marginLeft: wp('20'),



     
    },
    img2:{
        marginTop: hp('12%'),

           
    },
   
    imagehead: {
        height: hp('12%'),
        width: wp('20%'),
        borderRadius: 39,
        marginTop:hp('-20%'),
marginLeft:wp('60%')


    },
});
