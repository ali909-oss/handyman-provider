import React ,{useState}from "react";
import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
const Data=[
    {
        name: 'Pay or Send',
        id: '1',
      image: require("../assets/icons/dollar.png"),
      page: 'Scan'

    },
    {
        name: 'Add Money',
        id: '2',
      image: require("../assets/icons/dollar.png"),
      page: 'AddMoney'


    },
    {
        name: 'Get Payment',
        id: '3',
      image: require("../assets/icons/dollar.png"),
      page: 'Qrcode'


    },
    {
        name: 'Transactions',
        id: '4',
      image: require("../assets/icons/dollar.png"),
      page: 'Transaction'


    },
]

const Money = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
      setStatus(ss);
    }
    console.log(Status);

    return (
        <View style={styles.main}>
        {Data.map(data => (
           
          <View
            style={{
             
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:hp('5%'),
                width: widthPercentageToDP('22%'),
                height:hp('4%'),
                borderRadius: 10, 
                marginBottom:15
                                
            }}>
            <TouchableOpacity onPress={() => navigation.navigate(data.page)}>
              <View
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={[
                    Status === data.name ? styles.cont : styles.mainview,
                  ]}>
                  <Image source={data.image} style={styles.image1} />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
           
       
        


            
        </View>
    )
}

export default Money;

const styles = StyleSheet.create({
    
    main:{
        height: hp('13%'),
        width: wp('90%'),
        padding:5,
        marginBottom:-4,
        backgroundColor:'white',
        borderRadius:19,
        borderWidth:0.5,
        flexDirection:'row',
        alignSelf:'center'
    },
    image1:{
        height:hp('4%'),
        width:wp('8%'),
        marginLeft:wp('2%')
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('4%'),


    },
    name:{
        fontSize:13,
        marginTop:hp('2%'),
        fontWeight:'bold',
        
    }

})