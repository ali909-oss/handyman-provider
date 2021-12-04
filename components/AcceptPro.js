import React ,{useState} from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import { useEffect } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/native';

const DATA = [

    {

        name: "Ali",
        id: "1",
        rate:'$12/hr',
        category:'Home Clean',
        contact:'Call Now',
        chat:'Message',
        image: require("../assets/icons/user.jpg")


        


    },
]

const SPACING=10;

const AcceptPro = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        
      };

 

  return (
      <View style={{height:hp('30%'),justifyContent:'center',alignItems:'center'}}>
    <FlatList
            
    data={DATA}
    keyExtractor={item => item.id}
    renderItem={({item}) =>(
        
        <View style={styles.main}>
            
            
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
            <Image source={item.image} style={styles.image} />




            <View style={styles.Imageholder}>
            <TouchableOpacity onPress={toggleModal}>
            <Modal isVisible={isModalVisible}
                        >
        <View>
          <Text style={{color:'white',fontSize:30}}>033141----</Text>

          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
            <Text style={{color:'blue',fontSize:18}}>{item.contact}</Text>
            </TouchableOpacity>
            <TouchableOpacity >
           
        <TouchableOpacity >
            <Text onPress={()=> navigation.navigate("NewMessage")} style={{color:'green',fontSize:18}}>{item.chat}
            </Text>
            </TouchableOpacity>

            </TouchableOpacity>
           </View>


           

            

            
            


            
        </View>
    )
  
  
  }

  />
  </View>


  )
  }

  export default AcceptPro;

const styles = StyleSheet.create({
  
      
          
    main:{
        height: hp('20%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'white',
        borderRadius:19,
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
        marginTop:hp('1%')

        


    },
    category:{
     color:'#a8aeb2',
     fontSize:20
    },
    image:{
        height: hp('10%'),
       width: wp('20%'),
       marginTop:hp('-10%'),
       marginLeft:wp('55%')



         
    },
    rate:{
        fontSize:20,
        color:'black'
    }
   

});