import React ,{useState} from 'react';
import {ScrollView,TouchableOpacity,
    View,StyleSheet,
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Dimensions } from 'react-native';
import Bookinginfo from './Bookinginfo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const ListTab=[
    {
        status:'Upcoming'
    },
    {
        status:'Cancelled'
    },
    {
        status:'Completed'
    },
]

const data=[
    {
        name: "Ali",
        id: "1",
        contact:'Call Now',
        chat:'Message',
        image: require("../assets/icons/download23.png")


    },
]
    const Newdata=[
        {
            name: "Ali",
            id: "1",
            
    
        },
]

const Bookings = () => {

    const [status,setStatus] = useState('Upcoming')
    const [datalist,setDatalist] = useState (Newdata)
    const setStatusFilter= status => {
        
        setStatus(status)
    }
    const renderItem = ({item,id}) => {
        return(
            <View key={id} style={styles.itemContainer}>
           <View style={styles.itemBody}>
               <Text style={styles.itemName}>{item.name}</Text>
               <Text style={styles.itemName}>{item.contact}</Text>


           </View>
           
            </View>
            

        )
    }


    

    
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ListTab}>
                {
                    ListTab.map(e =>(
                        <TouchableOpacity 
                        style={[styles.btntab ,status === e.status && styles.btnTabActive ]}
                        onPress={() => setStatusFilter(e.status)}
                        >
                        <Text style={styles.textTab} > {e.status}
                            </Text>

                    </TouchableOpacity>

                    ))
                }


            </View>
            <FlatList 
            data={data}
            keyExtractor={(e , i) => i.toString()}
            renderItem={renderItem}
            
            />
            

        </SafeAreaView>


    )}

export default Bookings;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ebf3f9',
        height: hp('100%'),
        width: wp('100%')

    },
    ListTab:{
       
        flexDirection:'row',
        alignSelf:'center',
    
    },
    btntab:{
        width:Dimensions.get('window').width/4,
        flexDirection:"row",
        borderWidth:0.5,
        borderColor:'#EBEBEB',
        padding:12,
        justifyContent:'center',
        color:'white'



    },
    textTab:{
        fontSize:14,
        color:'black'

        

    },
    btnTabActive:{
        backgroundColor:'lightblue',

    },
    textTabActive:{
        color:'black'
    },
    itemContainer:{
        flexDirection:"row",
        paddingVertical:20
    },
    itemBody:{
     paddingHorizontal:10,
     justifyContent:"center"

    },
    itemName:{
        fontWeight:"500",
        fontSize:12
    },
    itemStatus:{
        

    }
    

})