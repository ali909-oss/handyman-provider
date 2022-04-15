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


const Data = [
    {
        id: '1',
        name: 'AC',
        icon: 'snowflake-variant'

    },
    {
        id: '2',
        name: 'Non-AC',
        icon: 'snowflake'

    },
    {
        id: '3',
        name: 'Seater',
        icon: 'table-chair'

    },
    {
        id: '4',
        name: 'Sleeper',
        icon: 'bed'

    }
]

const Train = () => {
    const navigation = useNavigation();

    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);
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

    // DatePicker
    const [selectedDate, setselectedDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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
    return (
        <View style={styles.container}>
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
            <Text style={styles.texta}>Depart Date</Text>
            <View style={{marginTop:hp('1%')}}>
            <View style={styles.input}>

                <View style={{ marginTop: hp('4%') ,flexDirection:'row'}}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <EvilIcons name={'calendar'} color={'#1ba8ea'} size={40}
                            style={styles.time}

                        />


                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleDate}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                    {/* <View style={{ flexDirection: 'row' }}>

                        <Text style={styles.today}>Today</Text>
                        <Text style={{ marginLeft: wp('1%') }}>|</Text>
                        <Text style={styles.tomorrow}>Tomorrow</Text>
                    </View> */}
                                                        <Text style={styles.caltext}>{selectedDate}</Text>


                </View>
            </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                {Data.map(data => (

                    <View
                        style={{

                            justifyContent: 'center',
                            alignItems: 'center',
                            width:wp('25%')
                            

                        }}>

                        <TouchableOpacity onPress={() => { SetStatusfunc(data.name) }}>

                            <View
                                style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <View
                                    style={[
                                        Status === data.name ? styles.cont : styles.abc,
                                    ]}>
                                    <View style={styles.select}>

                                        <MaterialCommunityIcons name={data.icon} size={30} />
                                   
                                </View>
                                 </View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: 'black',
                                        textAlign: 'center',
                                        marginBottom: 5,
                                    }}>
                                    {data.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Services")}


                style={styles.btn1}>
                <LinearGradient colors={['#0469e6', '#4286f4', '#02a8ea']} style={styles.gradient}>
                    <Text style={styles.texts}>Search Trains</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    )
}
export default Train;
const styles = StyleSheet.create({


    container: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#ffffff'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: wp('90%'),
        height: hp('8%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'left'


    },
    cont: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black'

    },
    input1: {
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: null,
        borderWidth: null,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        zIndex: 2,
        alignSelf:'center'




    },
    texta: {
        fontSize: 18,
        color: '#1ba8ea',
        marginLeft: wp('5%'),
        marginTop: hp('2%')
    },
    today: {
        fontSize: 16
    },
    tomorrow: {
        fontSize: 16,
        marginLeft: wp('1%')
    },
    caltext: {
        fontSize: 16,
        marginLeft:wp('10%')
    },
    select: {
        width: wp('15%'),
        height: hp('8%'),
        borderColor: 'black',
        borderWidth: 1,

        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'

    },
    btn1: {
        width: wp('70%'),
        height: hp('7%'),
        marginLeft: wp('15%'),
        marginTop: hp('10%'),




    },


    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    texts: {
        color: 'white',
        fontSize: 18
    },

})