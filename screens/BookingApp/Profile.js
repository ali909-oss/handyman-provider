import React ,{useState} from "react";
import { View ,Text,StyleSheet,TextInput,Image,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";


const Data=[{
    username:'John Wick',
    user_image: require("../../assets/icons/img1.png"),

}]
const data=[
    {
        title:'Favorites',
        screenName:'Favorite',
        icon:'heart'

    },
    {
        title:'Notifications',
        screenName:'Notification',
        icon:'bell'



    },
    {
        title:'Need Help?',
        screenName:'Help',
        icon:'help-circle'


        

    },
    {
        title:'Rate us',
        screenName:'Rate',
        icon:'star'



    },
    {
        title:'Terms & Conditions',
        screenName:'Terms and Conditions',
        icon:'file-text'



    }
]

const Profile =()  => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
             <View  style={styles.header}>
            <Image style={styles.img} source={require('../../assets/icons/bg.png')} />
            <View style={{flexDirection:'row',marginTop:hp('-22%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Account</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:hp('2%'),marginLeft:wp('5%')}}>
            <Image style={styles.imagehead} source={Data && Data[0].user_image} />
            <View style={{flexDirection:'column',marginLeft:wp('5%'),padding:4}}>
            <Text style={styles.texta}>{Data && Data[0].username}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("ViewProfile")}>
                <Text style={styles.textb}>View Profile</Text>
            </TouchableOpacity>

                </View>



            </View>
           
           
            
            </View>
            <View style={{flex:4}}>
            <View style={{height:hp('50%'),marginTop:hp('10%')}}>
            <FlatList
            
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) =>(
                <TouchableOpacity onPress={() => navigation.navigate(item.screenName)}>

                  <View style={styles.main}>   
                  <View style={{flexDirection:'row'}}>
                      <Feather name={item.icon} size={25} color="black"/>
                      <Text style={styles.title}>{item.title}</Text>
                      </View>
                      </View>
                      </TouchableOpacity>
                      
              )}
              />
                      </View>


            </View>

        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    container:{
      height:hp('100%'),
      width:wp('100%'),
      backgroundColor:'#ffffff'
    },
    header:{
        flex:1
    },
    img:{
        width: wp('100%'), 
        height: hp('25%') ,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
       

    },
    text:{
        fontSize:25,
        color:'white',
        padding:5
    },
    imagehead:{
        height:hp('10%'),
        width:wp('20%'),
        borderRadius:50
    },
    texta:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    textb:{
        fontSize:16,
        color:'#ffffff'
    },
    main:{
        height:hp('10%'),
        width:wp('90%'),
        backgroundColor:'white',
        marginLeft:wp('5%'),
        padding:5,
        flexWrap:'wrap'

    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:wp('20%')
    }
})
