import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data=[
    {
        name:'Ali Hafeez',
        id:1,
        email:'abc@gmal.com',
        phone:'+92333333'
    }]
const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
               
               
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
                <View style={{marginTop: hp('-60%'), marginLeft: wp('-75%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}    name={"arrowleft"} size={35} color="black" />
                 </View>
                 <View>
                 <Text style={styles.texta}>My Profile</Text>
                 </View>
                 
                 <View style={styles.img2}>
                 <Image style={styles.imagehead} source={require('../assets/icons/img1.png')} />
                </View>

                
                    </View>

                    <View style={styles.footer}> 
                    <FlatList
                    data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    <Text style={{fontSize:20,color:'black',justifyContent:'flex-start'}}>Full Name</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{fontSize:20,color:'black',justifyContent:'flex-start'}}>Email Address</Text>

                    <Text style={styles.category}>{item.email}</Text>
                    <Text style={{fontSize:20,color:'black',justifyContent:'flex-start'}}>Phone Number</Text>

                    <Text style={styles.category}>{item.phone}</Text>
        
                    </View>
                    )
          
          
                }
                    />
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                    <View style={{width:wp('60%'),height:hp('8%'),borderRadius:20,borderWidth:0.5,borderColor:'lightblue',backgroundColor:'#ADD8E6',marginTop:hp('-30%')}} />
                    <Text style={{color:'white',marginTop:hp('-6%'),fontSize:25}}>Logout</Text>
                    </View>
                    
                    </View>
                    
        </View>
)}

export default Profile;

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
        justifyContent:"space-between"



       
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
