import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import { TransitionIOSSpec } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";


const Flights = () => {
    const navigation = useNavigation();

    const [switchValue, setswitchValue] = useState(false);
    const toggleSwitch = (value) => {
        setswitchValue(value);
    }
    // Dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'India', value: 'pk' },
        { label: 'Pakistan', value: 'ind' }
    ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'America', value: 'america' },
        { label: 'Canada', value: 'cnd' }
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Business Class', value: 'Business' },
        { label: 'Economy', value: 'Economy' }
    ]);

    // DatePicker
    const [selectedDate, setselectedDate] = useState("");
    const [selectedDate1, setselectedDate1] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDate = (date) => {
        setselectedDate(date.toDateString());
        hideDatePicker();
    };
    const showDatePicker1 = () => {
        setDatePickerVisibility1(true);
    };

    const hideDatePicker1 = () => {
        setDatePickerVisibility1(false);
    };
    const handleDate1 = (date) => {
        setselectedDate1(date.toDateString());
        hideDatePicker1();
    };
    return (
        <View style={styles.container}>
             <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:hp('3%')}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>One-Way</Text>
      <Switch
            trackColor={{ false: "#a5c8fb", true: "#a5c8fb" }}
            thumbColor={switchValue ? "#1390e3" : "#1390e3"}
           
         
            style={styles.switch}
            onValueChange={toggleSwitch}
            value={switchValue}
            />
      <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Round-Trip</Text>
      </View>
      <View style={{ marginTop: hp('2%') }}>
                <DropDownPicker
                    style={styles.input1}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="From"
                    placeholderStyle={{
                        color: '#d4d4d4',
                        fontSize: 18,
                        padding: 5
                    }}

                />
            </View>
            <View style={{ marginTop: hp('3%') }}>
                <DropDownPicker
                    style={styles.input1}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    placeholder="To"
                    placeholderStyle={{
                        color: '#d4d4d4',
                        fontSize: 18,
                        padding: 5
                    }}

                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text style={styles.texta}>Depart Date</Text>
            <Text style={styles.texta}>Return Date</Text>


            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={styles.input}>
                <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <EvilIcons name={'calendar'} color={'#1ba8ea'} size={35}
                            style={styles.time}

                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleDate}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                    <Text style={styles.caltext}>{selectedDate}</Text>
                    </View>
                    </View>
                    <View style={styles.input}>
                <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                    <TouchableOpacity onPress={showDatePicker1}>
                        <EvilIcons name={'calendar'} color={'#1ba8ea'} size={35}
                            style={styles.time}

                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible1}
                            mode="date"
                            onConfirm={handleDate1}
                            onCancel={hideDatePicker1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.caltext}>{selectedDate1}</Text>
                    </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('3%')}}>
                    <TextInput
                        placeholder="Adult"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                     <TextInput
                        placeholder="Child"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                     <TextInput
                        placeholder="Infant"
                        style={styles.input2}
                        fontSize={18}
                        padding={5}
                        placeholderTextColor={'#d4d4d4'}


                    />
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                    style={styles.input1}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="Class"
                    placeholderStyle={{
                        color: '#d4d4d4',
                        fontSize: 18,
                        padding: 5
                    }}

                />


                    </View>
                    <TouchableOpacity                      onPress={() => navigation.navigate("Services")}

                    
style={styles.btn1}>
             <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
<Text style={styles.texts}>Search Flights</Text>
</LinearGradient>
</TouchableOpacity>

        </View>

    )}
    export default Flights;
    const styles = StyleSheet.create({


        container: {
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: '#ffffff'
        },
        input: {
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('40%'),
            height: hp('8%'),
            backgroundColor: '#ffffff',
            marginLeft: wp('5%'),
            textAlign: 'left'
    
    
        },
        input1: {
            width: wp('90%'),
            height: hp('8%'),
            borderRadius: null,
            alignSelf:'center',
            borderWidth: null,
            borderBottomWidth: 0.5,
            borderColor: 'black',
            zIndex: 2,
    
    
    
    
        },
        input2: {
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('25%'),
            height: hp('8%'),
            backgroundColor: '#ffffff',
            marginLeft: wp('5%'),
            textAlign: 'left'
    
    
        },
        texta: {
            fontSize: 16,
            color: '#1ba8ea',
            marginLeft: wp('5%'),
            marginTop: hp('2%')
        },
        caltext: {
            fontSize: 15
        },
        btn1: {
            width:wp('70%') ,
            height:hp('7%'),
            marginLeft:wp('15%'),
            marginTop:hp('2%'),
            
           
           
          
          },
          
          
          gradient: {
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
            borderRadius:5
          },
          texts: {
            color: 'white',
            fontSize: 18
          },
    })