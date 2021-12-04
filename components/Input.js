import React from 'react';
import { View, TextInput,Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Add Contact info');

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
          <Text style={{fontSize:20,color:'blue',fontWeight:'700'}}>Phone Number/E-mail</Text>
      <UselessTextInput
        multiline
        numberOfLines={1}
        onChangeText={text => onChangeText(text)}
        value={value}
    
        
      />
    </View>
  );
}

export default UselessTextInputMultiline;