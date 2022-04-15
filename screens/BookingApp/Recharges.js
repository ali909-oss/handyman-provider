import React ,{useState} from "react";
import { View ,Text,StyleSheet,TextInput} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';




const Recharge =()  => {
  const navigation = useNavigation();

  const [switchValue,setswitchValue]=useState(false);
  const toggleSwitch =(value) =>{
    setswitchValue(value);
}
// Dropdown
const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Jazz', value: 'Jazz'},
      {label: 'Zong', value: 'Zong'}
    ]);

  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:hp('3%')}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Prepaid</Text>
      <Switch
            trackColor={{ false: "#a5c8fb", true: "#a5c8fb" }}
            thumbColor={switchValue ? "#1390e3" : "#1390e3"}
           
         
            style={styles.switch}
            onValueChange={toggleSwitch}
            value={switchValue}
            />
      <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Postpaid</Text>
      </View>
      <View style={{marginTop:hp('4%')}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                        placeholder="Enter Your Phone Number"
                        style={styles.input}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    <AntDesign style={styles.searchIcon} name="contacts" size={30} color="#21bbf8" />
                </View>
                <View style={{marginTop:hp('2%')}}>
                <DropDownPicker
        style={styles.input1}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select Operator"
      placeholderStyle={{
        color: '#d4d4d4',
        fontSize:18,
        padding:5
      }}

    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TextInput
                        placeholder="Enter Amount"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    <TouchableOpacity >
                    <Text style={styles.text}>See Plans</Text>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop:hp('2%')}}>
                    <TextInput
                        placeholder="Have Promocode?"
                        style={styles.input}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                </View>
      </View>
      <TouchableOpacity                      onPress={() => navigation.navigate("HomeScreen")}

                    
                    style={styles.btn1}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.texts}>Pay via ...</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
export default Recharge;

const styles = StyleSheet.create({
  container:{
    height:hp('100%'),
    width:wp('100%'),
    backgroundColor:'#ffffff'
  },
  input: {
    borderBottomColor:'black',
    borderBottomWidth:0.5,
    width: wp('90%'),
    height: hp('8%'),
    marginTop: hp('2%'),
    backgroundColor: '#ffffff',
    textAlign: 'left',
    alignSelf:'center'



},
input1:{
  width: wp('90%'),
    height: hp('8%'),
    borderRadius:null,
    borderWidth:null,
    borderBottomWidth:0.5,
    borderColor:'black',
    zIndex:2,
    alignSelf:'center'




},
searchIcon:{ 
  marginTop:hp('4%'),
  marginLeft:wp('-10%')
},
text:{
  fontSize:15,
  color:'#1ba8ea',
  borderBottomColor:'black',
  borderBottomWidth:0.5,
  fontWeight:'700',
  textAlign:'center',
  padding:5,
  marginTop:hp('5.7%')
 
},
input2: {
  borderBottomColor:'black',
  borderBottomWidth:0.5,
  width: wp('70%'),
  height: hp('8%'),
  marginTop: hp('2%'),
  backgroundColor: '#ffffff',
  textAlign: 'left',
  alignSelf:'center'


},
btn1: {
  width:wp('70%') ,
  height:hp('7%'),
  marginLeft:wp('15%'),
  marginTop:hp('5%'),
  
 
 

},

texttt:{
  color: '#a6acc0',
  fontSize: 22

},
gradient: {
  flex:1,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius:5
},
texts: {
  color: 'white',
  fontSize: 22
},
})