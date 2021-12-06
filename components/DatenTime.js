import React, {useState} from 'react';
import {View, Button, Platform,Text, StatusBar} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export const DatenTime = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text,setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate =  new Date(currentDate);
    let fDate = 'Date: '  + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes(); 
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
};

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    
  return (
    <View style={{marginTop:hp('15%')}}> 
      <View>
        <Text style={{fontWeight:'500',fontSize:20,marginTop:heightPercentageToDP('-30%'),justifyContent:'center',alignItems:'center',textAlign:'center',color:'green'}}>{text}</Text>
        </View>
      <View style={{marginTop:heightPercentageToDP('-80%'),width:widthPercentageToDP('50%'),justifyContent:'center',alignItems:'center', }}>
        <Button onPress={showDatepicker} title="Select Date for Booking!" />
      </View>
      <View style={{marginTop:heightPercentageToDP('-80%'),marginLeft:widthPercentageToDP('40%'),width:widthPercentageToDP('50%'),justifyContent:'center',alignItems:'center'}}>
        <Button onPress={showTimepicker} title="Select Time for Booking!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
     
    </View>
  );
};


