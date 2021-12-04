import React from 'react';
import { StyleSheet, View, Text, FlatList,Button, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data=[
    {
       title:'Home',
        id:1,
    addres:'New York USA'
    },
    {
        title:'Office',
         id:2,
     addres:'Near City Bank,New York USA'
     },
     {
        title:'Other',
         id:3,
     addres:'New York USA'
     },
    
]
const SPACING=5;

const ManageAddress = ({navigation}) => {
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
                <View style={{marginTop: hp('6%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
               
               
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
               
                 <View style={{marginTop:hp('5%')}}>
                 <Text style={styles.texta}>Manage Address</Text>
                 </View>
                 <Text style={styles.textb}>Pre Saved Address</Text>
                
                 

                
                    </View>

                    <View style={styles.footer}> 
                    <View style={{marginTop:hp('2%'),height:hp('40%')}}>
                    <FlatList
                    data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                    
                    <Text style={styles.name}>{item.title}</Text>

                    <Text style={styles.detail}>{item.addres}</Text>

                   
                    </View>

        
                    )
                   
          
          
                }
                    />
                     
                    
                    </View>
                    <View style={styles.btn}>
    
    <Button title="Add Address" onPress={()=> navigation.navigate("Location")}/>
    </View>
                    
                   
                  
                    
                    </View>
                    
                    
        </View>
)}

export default ManageAddress;

const styles = StyleSheet.create({
    name:{
        fontSize:18,
        fontWeight:"700",
        color:"blue"
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    main:{
        height: hp('10%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%')
    

    },
    header: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:"space-between"



       
    },
    Imageholder:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding:15,
        marginLeft: wp('50%'),
        marginTop:hp('-7%')



        


    },
    texta:{
        fontSize:25,
        fontWeight:'500',
        color:'blue',
        marginTop: hp('-40%'),
           marginRight: wp('40%'),
           
       },
       textb:{
        fontSize:15,
        color:'#505050',
        marginTop: hp('-35%'),
           marginRight: wp('50%'),


       },
        
    img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },
   
    btn:{
        width: wp('60%'),
        borderRadius:20,
        borderWidth:5,
        borderColor:'#2196f3',
        marginTop:hp('50%'),
        position:'absolute',
        marginLeft: wp('20%'),

        



      },
});
