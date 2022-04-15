import React, { useState } from "react";
import { View ,Text,StyleSheet,Image,TouchableOpacity,Picker} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from "react-native-vector-icons/dist/Entypo";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

const Data=[
    {
        id:'1',
        icon:"bed",
        name:'Al-Fatah',
        price:"3000"
    },
    {
        id:'2',
        name:'Eko Hotel & Suits',
        price:"2800",
        icon:'bed'
    }
]


const Price=()=>{
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
    
    //   Picker
    const [selectedValue, setSelectedValue] = useState("");
    return(
        <View>
             <View style={styles.header}>
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
             <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: wp('-10%'), marginTop: hp('1%') }}>
            <Text style={styles.texta}>Check-in</Text>
            <Text style={styles.texta}>Check-out</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>

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
        <View style={{marginTop:hp('2%')}}>
            <Text style={styles.text}>All Options</Text>
            <View style={{marginTop:hp('2%')}}>
            {Data.map((data)=>{
                    return(
                        <View style={{flexDirection:'row',marginLeft:wp('2%'),justifyContent:'space-between',marginBottom:hp('3%')}}>
                            <FontAwesome name={data.icon} color="black" size={25}/>
                            <Text style={styles.name}>{data.name}</Text>
                            <Text style={styles.price}>₦{data.price}</Text>
                            <TouchableOpacity>
                            <View style={styles.priceback}>
                            <Text style={styles.book}>Book Now</Text>
                            </View>
                            </TouchableOpacity>

                        </View>
                    )
            })
        }
        </View>
        </View>
                 </View>
        </View>
    )
}
export default Price;
const styles=StyleSheet.create({
    header:{
        backgroundColor:'#ffffff',
        width:wp('100%'),
        height:hp('40%'),
        borderRadius:5,
        padding:5,
        marginTop:hp('2%')

    },
    texta: {
        fontSize: 18,
        color: 'black',
        marginLeft: wp('5%'),
    },
    text:{
        fontSize:18,
        color:'black',
        marginLeft:wp('4%'),
        fontWeight:'700'

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
    caltext: {
        fontSize: 14,
        color: '#8f8f8f',
        textAlign: 'left',
        fontWeight: '700',
        marginTop: hp('1%'),
        padding: 4
    },
    time: {
        marginTop: hp('1%'),
        marginLeft: wp('2%')
    },
    container1: {
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
        flexDirection:'row',
        width:wp('40%'),
        marginTop:hp('1%'),
        alignItems:'center',
        justifyContent:'center',
        marginLeft:wp('25%')
        
        
    },
    price:{
        fontSize:18,
        color:'black',
        

    },
    book:{
        color:'#ffffff',
        fontSize:14
    },
    priceback:{
        backgroundColor:'#3f51b5',
        width:wp('20%'),
        height:hp('4%'),
        borderRadius:5,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        marginLeft:wp('2%'),
        
        
        
    },
    name:{
        fontWeight:'700',
        fontSize:18,
        marginLeft:wp('2%')
    }
})