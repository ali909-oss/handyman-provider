import React ,{useState} from "react";
import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Data=[
    {
        name: 'EKO',
        id: '1',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'KANO',
        id: '2',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'IKEDC',
        id: '3',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'Abuja',
        id: '4',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'JOS',
        id: '5',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'EKO',
        id: '6',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'Kaduna',
        id: '7',
        image: require("../../assets/icons/kedco.png"),
    },
    {
        name: 'PowerGen',
        id: '8',
        image: require("../../assets/icons/kedco.png"),
    },
]

const Electricity = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
      setStatus(ss);
    }
    console.log(Status);


    return (
        <View >
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.texta}>Slect Your Service</Text>
            </View>
           
            <View style={styles.main}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            {Data.map(data => (
               
              <View
                style={{
                 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:hp('5%'),
                    width: widthPercentageToDP('22%'),
                    height:hp('5%'),
                    borderRadius: 10, 
                    marginBottom:15
                                    
                }}>
                <TouchableOpacity onPress={() => {SetStatusfunc(data.name)}}>
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
                        fontSize: 15,
                        color: 'black',
                        textAlign: 'center',
                        marginBottom: 10,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
               
           
           
               </ScrollView>


                
            </View>
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.textb}>Enter Your Meter No :</Text>
            </View>
            <View >
                    <TextInput
                        placeholder="Your Meter No :"
                        style={styles.input}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                </View>
                <TouchableOpacity 

                    
style={styles.btn1}>
             <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
<Text style={styles.texts}>Continue</Text>
</LinearGradient>
</TouchableOpacity>
                
            </View>
    )
}
export default Electricity;
const styles = StyleSheet.create({
   
    main:{
        marginTop:hp('2%'),
        width: wp('95%'),
        padding:10,
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:wp('2%'),
        flexDirection:'row',
       
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 1,


        
    },
    texta:{
        fontSize:22,
        fontWeight:'700',
        color:'black',
        padding:5,
        marginLeft:wp('4%')
    },
    image1:{
        width:wp('10%'),
        height:hp('6%')
    },
    cont:{
        borderWidth:3,
        borderColor:'blue',
        borderRadius:10,
        width:wp('14%'),
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center'
    },
    textb:{
        fontSize:20,
        fontWeight:'500',
        color:'#2162c2',
        padding:5,
        marginLeft:wp('4%')

    },
    input: {
        borderBottomColor:'#2162c2',
        borderBottomWidth:1,
        width: wp('90%'),
        height: hp('8%'),
        textAlign: 'left',
        marginTop:hp('1%'),
    backgroundColor:'#ffffff',
    alignSelf:'center'
    
    
    },
    btn1: {
        width:wp('70%') ,
        height:hp('7%'),
        marginLeft:wp('15%'),
        marginTop:hp('5%'),
        
       
       
      
      },
      
     
      gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5
      },
      texts: {
        color: 'white',
        fontSize: 22
      },
})