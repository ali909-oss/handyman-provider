import React from 'react';
import { View, TextInput,Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Sign = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      maxLength={40}
    />
  );
}

const LocationSer = () => {
  const [value, onChangeText] = React.useState();

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
      
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:widthPercentageToDP('80%'),
        marginLeft:widthPercentageToDP('5%')

      }}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black',marginTop:heightPercentageToDP('2%')}}>Service Location</Text>
      <Sign
        multiline
        numberOfLines={2}
        onChangeText={text => onChangeText(text)}
        value={value}
        fontSize={18}

    
        
      />
    </View>
  );
}

export default LocationSer;