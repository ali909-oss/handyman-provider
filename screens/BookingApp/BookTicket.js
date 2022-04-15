import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Upcoming from '../../components/Upcoming';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Train from '../../components/Train';
import Flights from '../../components/Flights';
import Bus from '../../components/Bus';

const BookTicket = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();


    return (
        <View style={styles.container }>
            <View  style={styles.header}>
            <Image style={styles.img} source={require('../../assets/icons/bg.png')} />
            <View style={{flexDirection:'row',marginTop:hp('-8%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Book a Ticket</Text>
            </View>
           
           
            
            </View>
            <View style={{flex:4,marginTop:hp('-10%')}}>
            <Tab.Navigator tabBarOptions={{
        
        tabStyle: {
        marginTop:hp('1%'),
        },
        activeTintColor: 'white',
        pressColor:'white',
        labelStyle: { fontSize: 12,fontWeight:'700' },
        style: { backgroundColor: '#0293e9', },
      }}>
        
        <Tab.Screen name="Train Ticket" component={Train} />
        <Tab.Screen name="Flights" component={Flights} />
        <Tab.Screen name="Bus" component={Bus} />


        
      </Tab.Navigator>
      </View>
            

            
                    </View>
    )
}

export default BookTicket;

const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')
    },
    img:{
        width: wp('100%'), 
        height: hp('10%') ,
       

    },
    text:{
        fontSize:20,
        color:'white',
        padding:5
    },
    header:{
        flex:1,
    }
})