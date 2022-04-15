import React ,{useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, ImageBackground,ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
const Data=[
    {
        id:'1',
        name: 'Taxi driver',
        image: require("../assets/icons/Vector9.png"),
    },
    {
        name: 'Hairdresser',
          id: '2',
        image: require("../assets/icons/Vector8.png"),
         },
    {
        id:'3',
        name: 'Barber',
        image: require("../assets/icons/Vector3.png"),
     },
    {
        id:'4',
        name: 'Catering',
        image: require("../assets/icons/Vector2.png"),
     },

]

const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      multiple:true,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      sheetRef.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      multiple:true,

      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      sheetRef.current.snapTo(1);
    });
  }


const PortfolioPro = ({ navigation }) => {
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    return (
        <View style={styles.container}>
             




            <View style={styles.header}>
            <View style={{marginTop: hp('7%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("BookingScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
                 <View style={{marginTop:hp('-2%')}}>
                    <Text style={styles.texta}>My Portfolio</Text>
                <Text style={styles.textb}>Upload your best works</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" ,marginTop:hp('-3%')}}>
                <View style={styles.btn}>

<Button title="From Phone" onPress={choosePhotoFromLibrary} />
</View>
<View style={styles.btn}>

<Button title="From Camera" onPress={takePhotoFromCamera} />
</View>
                    </View>


                </View>




            <View style={styles.footer}>
                <View style={{flex:1,        marginTop:hp('4%')
,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.SquareShapeView} />
            <View style={styles.SquareShapeView2} />
            
            </View>
            <View style={{flex:1,        marginTop:hp('4%')
,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.SquareShapeView} />
            <View style={styles.SquareShapeView2} />
            
            </View>
            <View style={{flex:1,        marginTop:hp('4%')
,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.SquareShapeView} />
            <View style={styles.SquareShapeView2} />
            
            </View>





             
                      


                
            
                    


                </View>

                
                

                

</View>

    )
}

    export default PortfolioPro;

const styles = StyleSheet.create({
   
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    texta:{
        fontSize:25,
        fontWeight:'700',
        color:'blue',
           
       
           
       },
       textb:{
        fontSize:17,
        color:'#505050',
        

       


       },
       Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('2%'),


    },
       btn: {
        width: wp('48%'),
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#2196f3',
        marginTop: hp('5%'),
        marginLeft: wp('1%'),





    },
       image1: {
        height: hp('15%'),
        width: wp('12%'),
        marginTop: hp('3%'),
        resizeMode:'contain'

    },
    img1:{
        height: hp('5%'),
        width: wp('6%'),
      



     
    },
       textaa:{
        fontSize:25,
        fontWeight:'700',
        color:'blue',
           marginLeft: wp('5%'),
           
       
           
       },
       img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf3f9',
        paddingBottom:50,
        

    },
    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems:'center',
        marginTop:hp('-5%')

        




    },
    SquareShapeView: {
 
        width:wp('40%'),
        height:hp('20%'),
        backgroundColor: 'grey',
        
     
      },
      SquareShapeView2: {
 
        width:wp('40%'),
        height:hp('20%'),
        backgroundColor: 'grey',
        marginLeft:wp('5%'),

        
     
      },
      SquareShapeView3: {
 
        width:wp('40%'),
        height:hp('20%'),
        backgroundColor: 'grey',
        
     
      },
      SquareShapeView4: {
 
        width:wp('40%'),
        height:hp('20%'),
        backgroundColor: 'grey',
        
     
      },
    

});
