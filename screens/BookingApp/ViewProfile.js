import React ,{useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';

import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/dist/Feather';

const Data=[
    {
        user_image: require("../../assets/icons/image.png"),

    }
]

                

const ViewProfile = ({ navigation }) => {
    const [image, setImage] = useState();

const sheetRef = React.useRef(null);

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


const renderInner = () => (
    <View style={styles.bottom}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload Photo</Text>
    </View>
    <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera} >
      <Text style={styles.panelButtonTitle}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
      <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={() =>  {sheetRef.current.snapTo(1)
       
      }}>
      <Text style={styles.panelButtonTitle}>Cancel</Text>
    </TouchableOpacity>
  </View>
    

);

const renderHeader = () => (
    <View style={styles.Header}>
        <View style={styles.panelheader}>
            <View style={styles.panelhandle}>

            </View>
        </View>
    </View>
    
); 
    return (
        <View style={styles.container}>
            <Text style={styles.update}>Update</Text>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:hp('5%')}}>
                <View style={styles.profile}>
                <Image
           source={Data && Data[0].user_image}
           style={styles.userimg}
           >

           </Image>
                </View>
                <TouchableOpacity onPress={() => {sheetRef.current.snapTo(0)}}>
                <Text style={{marginTop:hp('1%'),fontSize:16,color:'black'}}>Change Picture</Text>
                </TouchableOpacity>
            </View>
            <BottomSheet
                renderContent={renderInner}
                renderHeader={renderHeader}
                borderRadius={20}
                
    
        ref={sheetRef}
                snapPoints={[390,0]}
                initialSnap={1}
                enabledGestureInteraction={true}
                />
            <View style={styles.info}>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:wp('-10%'),marginTop:hp('1%')}}>
<Text style={styles.texta}>First Name</Text>
<Text style={styles.texta}>Last Name</Text>
</View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    
                    <TextInput
                        placeholder="Sam"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                     <TextInput
                        placeholder="Smith"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                        <Text style={styles.texta}>Email Address</Text>
                        <View style={{flexDirection:'row'}}>
                        <TextInput style={styles.input}
                        placeholder='samsmith@gmail.com'
                        fontSize={18}
                        padding={5}
                        />
                        <Feather name="check-circle" size={25} color="#1ba8ea"
                        style={styles.icon}
                        />
                        </View>
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                        <Text style={styles.texta}>Phone Number</Text>
                        <View style={{flexDirection:'row'}}>
                        <TextInput style={styles.input}
                        placeholder='+1-678650-7656'
                        fontSize={18}
                        padding={5}
                        />
                        <Feather name="check-circle" size={25} color="#1ba8ea"
                        style={styles.icon}
                        />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:wp('-10%'),marginTop:hp('2%')}}>
<Text style={styles.texta}>Gender</Text>
<Text style={styles.texta}>Date of Birth</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    
                    <TextInput
                        placeholder="Male"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                     <TextInput
                        placeholder="23 March,2022"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    </View>
                     </View>
           




</View>
    )}
    export default ViewProfile;

    const styles = StyleSheet.create({
        name: {
            fontSize: 18,
            padding:10
        },
        input: {
            borderBottomColor: 'black',
            borderBottomWidth: 0.8,
            width: wp('80%'),
            height: hp('8%'),
            backgroundColor: '#ffffff',
            marginLeft: wp('5%'),
            textAlign: 'left'
    
    
        },
        container: {
    
            height: hp('100%'),
            width: wp('100%')
    
        },
        info:{
            width:wp('90%'),
            height:hp('60%'),
            backgroundColor:'#ffffff',
            borderRadius:5,
            marginLeft:wp('5%'),
            marginTop:hp('3%')
        },
        profile:{
            width:wp('25%'),
            height:hp('13%'),
            borderRadius:50,
            backgroundColor:'#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent:'center',
            textAlign:'center'
          
          },
          icon:{
              marginLeft:wp('-8%'),
              marginTop:hp('2%')

          },
          input2: {
            borderBottomColor: 'black',
            borderBottomWidth: 0.8,
            width: wp('35%'),
            height: hp('8%'),
            backgroundColor: '#ffffff',
            textAlign: 'left'
    
    
        },
        texta: {
            fontSize: 16,
            color: '#1ba8ea',
            marginLeft: wp('5%'),
        },
          update:{
              justifyContent:'flex-end',
              marginLeft:wp('80%'),
              marginTop:hp('1%'),
              fontSize:16,
              color:'#1ba8ea'
          },
          userimg:{
            width:wp('25%'),
            height:hp('13%'),

          },
          panel: {
            padding: 20,
            backgroundColor: 'black',
          
            
          },
          panelTitle: {
            fontSize: 27,
            height: 35,
          },
          panelSubtitle: {
            fontSize: 14,
            color: 'gray',
            height: 30,
            marginBottom: 10,
          },
          panelButton: {
            padding: 13,
            borderRadius: 10,
            backgroundColor: '#00BFFF',
            alignItems: 'center',
            marginVertical: 7,
          },
          panelButtonTitle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          Header: {
            backgroundColor: '#FFFFFF',
            shadowColor: '#333333',
            shadowRadius: 2,
            shadowOpacity: 0.4,
            // elevation: 5,
            paddingTop: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          
          },
          panelheader: {
            alignItems: 'center',
          },
          panelhandle: {
            width: 50,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#00000040',
            marginBottom: 8,
          },
          bottom:{
            backgroundColor:'white',
            justifyContent:'center',
            padding: 20,
          
            
          
          },
    })