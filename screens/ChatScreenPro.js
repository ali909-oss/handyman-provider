import React ,{useState} from 'react';
import {ScrollView,TouchableOpacity,
    View,StyleSheet,
    Text,FlatList,Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Message from '../components/Message';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      messageTime: '4 mins ago',
      messageText:'I can do this task',
      image: require('../assets/icons/user.jpg')
    },
    {
      id: '2',
      userName: 'John Doe',
      messageTime: '2 hours ago',
      messageText:'I can do this task',
      image: require('../assets/icons/user.jpg')
  
    },
    {
      id: '3',
      userName: 'Ken William',
      messageTime: '1 hours ago',
      messageText:'I can do this task',
      image: require('../assets/icons/user.jpg')
  
    },
    {
      id: '4',
      userName: 'Selina Paul',
      messageTime: '1 day ago',
      messageText:'I can do this task',
      image: require('../assets/icons/user.jpg')
  
    },
    {
      id: '5',
      userName: 'Christy Alex',
      messageTime: '2 days ago',
      messageText:'I can do this task',
      image: require('../assets/icons/user.jpg')
  
    },
  ];
  const SPACING=5;


const ChatScreenPro = ({navigation}) => {
    
    return (

        <View style={styles.container}>
            
       <View style={styles.container}>
           <View style={styles.header}>
               <Text style={styles.texthead}>CHATS</Text>
               

           </View>
           <View style={styles.footer}>
             <View style={{height:hp('75%')}}>
       <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <TouchableOpacity  onPress={()=> navigation.navigate("NewMessage")} >
            <View style={styles.main}>
           
                    
                    
            <Text style={styles.name}>{item.userName}</Text>

            <View style={styles.Imageholder}>
            <Text style={{color:'grey',fontSize:15}}>{item.messageText}</Text>
            <Text style={{color:'black',fontSize:13}}>{item.messageTime}</Text>

           </View>
           <Image source={item.image} style={styles.image} />


           

            

            
            


            
        </View>
        </TouchableOpacity>

    )
  
  
  }
  

  />
  </View>
  
  </View>
  
  </View>               
    </View>
    
  
    )
}

export default ChatScreenPro;
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'white',
        paddingBottom:50
    },
    footer:{
        flex: 5,
        backgroundColor: '#f8f9fd',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
    texthead:{
          fontSize:25,
          fontWeight:'500',
          color:'black',
          
          
    
    
    
    
    },
    main:{
        height: hp('15%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:-2,
        backgroundColor:'white',
        borderRadius:19
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black'
    },
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        width: wp('60%'),
    
        
    
    
    },
    category:{
     color:'#a8aeb2'
    },
    image:{
        height: hp('10%'),
       width: wp('18%'),
       marginTop: hp('-8%'),
       marginLeft: wp('65%'),
    
    
    
         
    },
    img1:{
        height: hp('2%'),
        width: wp('100%'),
        marginTop: hp('5%'),
        marginLeft: wp('3%'),



     
    },
    
    
   
   
 
})