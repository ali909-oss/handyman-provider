import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import UselessTextInputMultiline from '../components/Input';
import UselessText from '../components/InputText';
import Modal from "react-native-modal";
import { is } from "@babel/types";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



const SupportPro = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [ModalVisible, setVisible] = useState(false);



  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggle = () => {
    setVisible(!ModalVisible);
  };
  
    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <View style={{marginTop: hp('6%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("BookingScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>


                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />

                <View style={{ marginTop: hp('-2%') }}>
                    <Text style={styles.texta}>Support</Text>
                </View>
                <Text style={styles.textb}>Connect Us</Text>




            </View>

            <View style={styles.footer}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={styles.btn}>

                        <Button title="Contact Us" onPress={toggle} />
                        <Modal style={styles.modal}

                            isVisible={ModalVisible}
                            animationType={"slide"}
                            onSwipeComplete={() => setVisible(false)}
                            swipeDirection="left"

                        >
          <Text style={{color:'black',fontSize:30}}>033141----</Text>
          <View style={styles.btnn}>
          <Button title="Cancel" onPress={toggle} />
          </View>
      </Modal>
                    </View>
                    <View style={styles.btn}>

                        <Button title="Mail Us" onPress={toggleModal}/>
                        <Modal style={styles.modal}

                            isVisible={isModalVisible}
                            animationType={"slide"}
                            onSwipeComplete={() => setModalVisible(false)}
                            swipeDirection="left"

                        >
          <Text style={{color:'black',fontSize:30}}>abc@gmail.com</Text>
          <View style={styles.btnn}>
          <Button title="Cancel" onPress={toggleModal} />
          </View>
      </Modal>
                    </View>
                </View>
                <View style={{marginLeft:widthPercentageToDP('5%'),marginTop:hp('2%')}}>
               <Text style={{color:'blue',fontWeight:'700',fontSize:25}}>Write Us</Text>
               <Text style={{padding:5}}>Let us know the Problem</Text>
               </View>
<View style={{marginTop:hp('1%')}}>
<UselessTextInputMultiline/> 
</View>
<View style={{marginTop:hp('5%')}}>
<UselessText/>

</View>
<View style={styles.btn1}>
    
    <Button title="Submit" onPress={()=> navigation.navigate("BookingScreen")}  style={{justifyContent:'center',alignItems:'center'}}/>
    </View>

 
                
                     
                    
                    </View>
                   


                
                

                


            </View>

    )
}

export default SupportPro;

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        fontWeight: "700"
    },
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    texta:{
        fontSize:30,
        fontWeight:'700',
        color:'blue',
        marginTop: hp('-45%'),
           
       
           
       },
       modal: {
        flex:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ebf3f9",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: hp('20%'),
        marginLeft: wp('10%'),
        height:hp('35%')

    },
       textb:{
        fontSize:15,
        color:'#505050',
        marginTop: hp('-38%'),

       


       },
       img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },
    btnn:{
        width: wp('50%'),
        borderRadius:20,
        borderWidth:10,
        borderColor:'#2196f3',
        marginTop:hp('6%'),
        overflow:"hidden",
       


      },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf3f9',
        paddingBottom: 10
    },
    footer: {
        flex: 6,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        




    },
    btn: {
        width: wp('40%'),
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#2196f3',
        marginTop: hp('5%'),
        marginLeft: wp('2%'),





    },
    
    btn1: {
        width: wp('50%'),
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#2196f3',
        marginTop: hp('8%'),
        marginLeft: wp('25%'),





    },
    phone: {
        marginLeft: wp('10%'),
        fontSize:18,
        color:'black'
    },
    texth:{
     
        fontSize:20,
        fontWeight:'500',
        color:'blue',


    },
    texthh:{
        fontSize:15,
        color:'grey'

    },
    

});
