import React ,{useState} from 'react';
import { StyleSheet, View, Text, Button,FlatList, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const SeriveRequest = ({navigation}) => {
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
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
        <View style={styles.panel}>
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

    bs= React.createRef();
    fall= new Animated.Value(1);
    return (
        <View style={styles.container}>
             
                <View style={styles.header}>
                <Image style={styles.img1} source={require('../assets/icons/Vector13.png')} />
               
                
                 <View >
                <Text  onPress={()=> navigation.navigate("HomeCleanProvider")} style={styles.textas}>SKIP</Text>
                </View>

                 <View>
                 <Text style={styles.texta}>Service Request</Text>
                  </View>
                  <View>
                 <Text style={styles.textb}>Let us know the problem</Text>
                 </View>


                 <View >
                <Image style={styles.img2} source={require('../assets/icons/Layer.png')} />
                </View>

                    
                 
                </View>

                <View style={styles.footer}>
                    
                <Text style={styles.textdetail}>Describe What Problems you are facing by uploading few images and write some details about it</Text>
                

                <View>
                <Text style={styles.comment}>Write Short Description</Text>
                <TextInput
            style={styles.input}
            placeholder="Share Your Experience (Optional)"
            placeholderTextColor="#b3b3b3"
            multiline={true}

            />
                </View>
                <View style={{marginLeft:wp('-70%'),marginTop:hp('3%')}}>
                    <TouchableOpacity onPress={() => {sheetRef.current.snapTo(0)
           
        }}>
                <FontAwesome 
                name="image"
                size={70}
                />
                </TouchableOpacity>
                <Text style={{fontSize:16}}>Add Image</Text>
                </View>
                
                <BottomSheet
                renderContent={renderInner}
                renderHeader={renderHeader}
                borderRadius={20}
                
    
        ref={sheetRef}
                snapPoints={[330,0]}
                initialSnap={1}
                enabledGestureInteraction={true}
                />
                <TouchableOpacity onPress={()=> navigation.navigate("HomeCleanProvider")}>
                 <View style={styles.Button}>
                     <Text style={styles.btntext}>Find Provider</Text>
                </View>
                </TouchableOpacity>
                  
                </View>



                </View>

)
}

export default SeriveRequest ;



const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')

    },
    header: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#ebf3f9',
        paddingBottom:50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-5'),
        alignItems:'center',



       
    },
    img1:{
        height: hp('25%'),
        width: wp('100%'),
        marginTop: hp('18'),
        marginLeft: wp('20'),



     
    },
    texta:{
        fontSize:25,
        fontWeight:'500',
        color:'#505050',
        marginTop: hp('-28'),
           marginRight: wp('45'),
       },
       textas:{
        fontSize:20,
        fontWeight:'500',
        color:'purple',
        marginTop: hp('-35%'),
           justifyContent:'flex-end',
           marginLeft:wp('70%')
       },
       textb:{
        fontSize:17,
        color:'#a3bccf',
        marginTop: hp('-22'),
           marginRight: wp('45'),
            
       },
       img2:{
        height: hp('20%'),
        width: wp('25%'),
        marginTop: hp('-20'),
        marginLeft: wp('60'),




       
    },
    textdetail:{
        color:'#4d4d4d',
        fontSize:18,
        marginTop: hp('3'),
        alignItems:'center',
        justifyContent:'center'

        
    },
    comment:{
        color:'#4d4d4d',
        fontSize:20,
        marginLeft: wp('1'),
        marginTop:hp('5%')

    },
    input:{
        
    borderBottomWidth:1,
    fontSize:20,
    width: wp('90%'),





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
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 8,
      },
    Button:{
        width: wp('80%'),
        height: hp('8%'),

        borderRadius:15,
        marginTop: hp('5%'),
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#69c4ff',
        borderColor:'#69c4ff'


        





      
    },
    btntext:{
        color:'#fff',
        fontSize:25,
        textAlign:'center',
        marginTop: hp('1'),



    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        marginTop:hp('-2%')
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
      }

});