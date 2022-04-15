import React ,{useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, FlatList, Picker } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView, Switch, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Slider from '@react-native-community/slider';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const HotelFilters = () => {
    const navigation = useNavigation();
    // DatePicker
    const [selectedDate, setselectedDate] = useState(true);
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
    //   Slider
    const [sliderValue, setSliderValue] = useState();
    //   Picker
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.view1}>
        <View style={{ flexDirection: 'row' }}>


            <TextInput
                placeholder=""
                style={styles.input}


            />
            <Entypo name="location-pin" size={30} color="black"
                style={styles.icon}
            />

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: wp('-10%'), marginTop: hp('1%') }}>
            <Text style={styles.texta}>From</Text>
            <Text style={styles.texta}>To</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%') }}>

            <View
                style={styles.input1}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                <TouchableOpacity onPress={showDatePicker}>


                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDate}
                        onCancel={hideDatePicker}
                    />

                    <EvilIcons name={'calendar'} color={'black'} size={30}
                        style={styles.time}

                    />




                </TouchableOpacity>

            </View>
            <View
                style={styles.input1}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                <TouchableOpacity onPress={showDatePicker}>


                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDate}
                        onCancel={hideDatePicker}
                    />

                    <EvilIcons name={'calendar'} color={'black'} size={30}
                        style={styles.time}

                    />




                </TouchableOpacity>

            </View>
        </View>
        <View style={{ marginTop: hp('2%') }}>
            <Text style={{ textAlign: 'center', fontSize: 16 ,color:'black'}}>₦{sliderValue}</Text>
            <Slider
                style={{ width: wp('90%'), height: hp('5%') }}
                minimumValue={0}
                maximumValue={3000}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                thumbTintColor="blue"
                value={sliderValue}
                onValueChange={
                    (sliderValue) => setSliderValue(sliderValue)}
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.container1}>
                <Picker

                    selectedValue={selectedValue}

                    style={{ height: hp('6%'), width: wp('32%') }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}


                >


                    <Picker.Item label="1 guest" value="1" />
                    <Picker.Item label="2 guests" value="2" />
                    <Picker.Item label="3 guests" value="3" />
                    <Picker.Item label="4 guests" value="4" />


                </Picker>
                <Ionicons name={'person'} color={'black'} size={25}
                style={{marginTop:hp('1%')}}
                />
            </View>
            <View style={styles.sort}>
                <Text style={styles.textt}>Sort</Text>
            </View>
            <View style={styles.sort1}>
                <Text style={styles.textt}>Filter</Text>
                <Ionicons name={'filter'} color={'black'} size={20}
                style={{marginTop:hp('1%')}}
                />


            </View>


        </View>

    </View>
    )}
export default HotelFilters;
const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    view1: {
        width: wp('90%'),
        backgroundColor: '#ffffff',
        height: hp('40%'),
        borderRadius: 5,
        padding: 5,
        marginLeft: wp('5%'),
        marginTop: hp('2%')
    },
    input: {
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: 'black',
        marginLeft: wp('3%')


    },
    icon: {
        marginLeft: wp('-8%'),
        marginTop: hp('1%')
    },
    texta: {
        fontSize: 18,
        color: '#1ba8ea',
        marginLeft: wp('5%'),
    },
    input1: {
        height: hp('6%'),
        width: wp('40%'),
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        flexDirection: 'row'

    },
    sort:{
        height: hp('5.5%'),
        width: wp('20%'),
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: 'white',
        

    },
    sort1:{
        height: hp('5.5%'),
        width: wp('20%'),
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent:'space-around'
        

    },

    time: {
        marginTop: hp('1%'),
        marginLeft: wp('2%')
    },
    caltext: {
        fontSize: 14,
        color: '#8f8f8f',
        textAlign: 'left',
        fontWeight: '700',
        marginTop: hp('1%'),
        padding: 4
    },
    container1: {
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
        flexDirection:'row'
        
    },
    textt:{
        fontSize:18,
        color:'black',
        textAlign:'center',
        marginTop:hp('1%'),
    }
})