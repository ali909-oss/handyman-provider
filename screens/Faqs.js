

import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


import Accordion from 'react-native-collapsible/Accordion';


const CONTENT = [
  {
    title: 'How to Book Provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
  {
    title: 'How to review provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"  
},
    
  {
    title: 'How to cancel Bookings?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
 {
    title: 'How to Book Provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
  {
    title: 'How to review provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"  
},
    
  {
    title: 'How to cancel Bookings?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
 {
    title: 'How to Book Provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
  {
    title: 'How to review provider?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"  
},
    
  {
    title: 'How to cancel Bookings?',
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
 },
 {
  title: 'How to cancel Bookings?',
  content:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
},
    
];


const Questions = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
 
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <AntDesign
                name="circledowno"
                size={20}
                
                style={{color:'black',marginLeft:wp('80%'),marginTop:hp('-3%')}}
                />
        
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text
          style={{ textAlign:'left',fontSize:18}}>
          {section.content}
          
        </Text>
        
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          <View style={styles.head}>
          <View style={{marginTop: hp('-4%'), marginLeft: wp('-4%') }}>
            <AntDesign
                     onPress={()=> navigation.navigate("BookingScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
          <Text style={styles.texta}>FAQ's</Text>
                <Text style={styles.textb}>Get Your Answers</Text>

          </View>
          <View style={styles.footer}>
        <ScrollView> 
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
           
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf3f9',
    paddingTop: 30,
  },
  title: {
    textAlign:'left',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign:'left',
    fontSize: 18,
    fontWeight: '500',
    color:'black',
    padding:5
  },
  content: {
    padding: 20,
    backgroundColor: '#ebf3f9',
  },
  active: {
    backgroundColor: '#F5FCFF',
  },
  inactive: {
    backgroundColor: 'white',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf3f9',
    paddingBottom:50,
    

},
footer: {
    flex: 4,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems:'center',
    marginTop:hp('-10%')
    

    




},
texta:{
    fontSize:30,
    fontWeight:'700',
    color:'blue',

       
   
       
   },
 
   textb:{
    fontSize:15,
    color:'#505050',

   


   },
});
