import * as React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
const DATA = [

  {

    title: "Carpet Shampooing",
    id: "6",
    date: '21 June,2020 - 10:00 am',
    name: 'Address:',
    adress: '125-B Street 1 New York ,USA',
    name2: 'Description:',
    description: "Loesum ipsum dolor sit amet,sed do incid dunt ut labore",
    btn: 'Amount to Pay : $15/hr'




  },
]

export default function Bottomsheet() {
  

    

return(
      <View>
         <FontAwesome5
                 name="window-minimize"
                 size={35}
                 style={{marginLeft:wp('35%'),marginTop:wp('-8%'),color:'grey'}}
                 />
      <FlatList

        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.main}>


            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.address} >Address</Text>


            <Text style={styles.adress}>{item.adress}</Text>
            <Text style={styles.descr}>Descrption</Text>
            <Text style={styles.category}>{item.description}</Text>









            

          </View>




        )




        }



      />
      </View>




  

  
)

}

const styles = StyleSheet.create({



  main: {
    height: hp('30%'),
    marginTop: hp('2%'),
    width: wp('90%'),

    borderRadius: 19,
  },
  btn: {
    width: wp('30%'),
    height:hp('20%'),

    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#2196f3',
    position:'absolute'




  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black'
  },
  Imageholder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: wp('60%'),




  },
  date: {
    fontSize: 15,
    marginLeft: wp('10%')
  },
  adress: {
    fontSize: 15,
    marginLeft: wp('10%'),
    color:'black'
  },
  address: {
    color: '#a8aeb2',
    padding:10,
    fontSize:16

  },
  category:{
    color:'black',
    padding:5


  },
  descr: {
    color: '#a8aeb2',
    padding:10,
    fontSize:16





  },
  btn: {
    width: wp('90%'),
    height: hp('100%')

  },
  line: {
    backgroundColor: "#000"
  },
  header: {
    shadowRadius: 2,
    shadowOpacity: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
  },

})