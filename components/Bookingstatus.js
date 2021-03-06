import React, { useState } from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView ,Button} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Bottomsheet from '../components/Bottomsheet';
import BottomSheet from 'reanimated-bottom-sheet';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { set } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const DATA = [

    {

        title: "Booking Request Sent",
        id: "2",
        description:"Requested on 19 Jun , 09:00 am",
        image: require("../assets/icons/Vector.png")


        


    },
    {

        title: "Booking Confirmed",
        id: "3",
        description:"Usually Confirms in 24 hrs",
        image: require("../assets/icons/Vect1.png"),
        confirm:'Confirmed on 21 July,11:24pm'


        


    },
    {

        title: "Started a Job",
        id: "4",
        description:"Schedule on 21 Jun, 10:00 am",
        image: require("../assets/icons/Vect2.png"),
        start:'Started since 11:23pm'


        


    },
    {

        title: "Job Completed",
        id: "5",
        description:"Payment info will appear here",
        price:' Amount to Pay $25',
        image: require("../assets/icons/Vect3.png")



        


    },
]

const SPACING=3;

const Bookingstatus = () => {
    const navigation = useNavigation();

    const [isTrue ,setisTrue]= useState(true)
    const sheetRef = React.useRef(null);
    const sheetRef1 = React.useRef(null);
    const sheetRef2 = React.useRef(null);
    const [no , setNo] = useState(0)

         

  return (
      <View style={styles.container}>
      <View style={{height:hp('68%'),marginTop:hp('1%')}}>
           
          {no == 0 ? <TouchableOpacity onPress={() => {sheetRef.current.snapTo(0)
           
        }}>
        <View style={styles.main}>
           
        
            <Text 
           
            style={styles.name}><Feather
            name="check-circle"
            size={20}
            style={{marginLeft:wp('3%'),color:'grey'}}
            /> {DATA && DATA[0].title}  </Text>
            
            <Text style={styles.category}>{DATA && DATA[0].description}</Text>
            <View style={{marginTop:hp('-3%')}}>
            
            </View>
            <Image source={DATA && DATA[0].image} style={styles.image} />

            
            
        </View>
        </TouchableOpacity> : <View style={styles.main}>
           
        
           <Text 
          
           style={styles.name}><Feather
           name="check-circle"
           size={20}
           style={{marginLeft:wp('3%'),color:'green'}}
           /> {DATA && DATA[0].title}  </Text>
           <Text style={styles.category}>{DATA && DATA[0].description}</Text>
 
           <Image source={DATA && DATA[0].image} style={styles.image} />

           
         
       </View>

       


}      
{no == 0 ? 
        <View style={styles.main}>
           
        
            <Text 
           
            style={styles.name}><Feather
            name="check-circle"
            size={20}
            style={{marginLeft:wp('3%'),color:'grey'}}
            /> {DATA && DATA[1].title}  </Text>
            <Text style={styles.category}>{DATA && DATA[1].description}</Text>
  
            <Image source={DATA && DATA[1].image} style={styles.image} />

            
            
        </View> : <View style={styles.main}>
           
        
           <Text 
          
           style={styles.name}><Feather
           name="check-circle"
           size={20}
           style={{marginLeft:wp('3%'),color:'green'}}
           /> {DATA && DATA[1].title}  </Text>
           <Text style={styles.category}>{DATA && DATA[1].confirm}</Text>
 
           <Image source={DATA && DATA[1].image} style={styles.image} />

           
         
       </View>}
       {no == 0 ? <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
        <View style={styles.main}>
           
        
            <Text 
           
            style={styles.name}><Feather
            name="check-circle"
            size={20}
            style={{marginLeft:wp('3%'),color:'grey'}}
            /> {DATA && DATA[2].title}  </Text>
            <Text style={styles.category}>{DATA && DATA[2].description}</Text>
  
            <Image source={DATA && DATA[2].image} style={styles.image} />

            
            
        </View>
        </TouchableOpacity> : <View style={styles.main}>
        { no == 0 ?
           <Text 
          
           style={styles.name}><Feather
           name="check-circle"
           size={20}
           style={{marginLeft:wp('3%'),color:'grey'}}
           /> {DATA && DATA[2].title}  </Text>:<View>
               <Text 
          
          style={styles.name}><Feather
          name="check-circle"
          size={20}
          style={{marginLeft:wp('3%'),color:'green'}}
          /> {DATA && DATA[2].title}  </Text></View>}
           <Text style={styles.category}>{DATA && DATA[2].start}</Text>
 
           <Image source={DATA && DATA[2].image} style={styles.image} />

           
         
       </View>}  
       {no == 1 ? <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
        <View style={styles.main}>
           
        
            <Text 
           
            style={styles.name}><Feather
            name="check-circle"
            size={20}
            style={{marginLeft:wp('3%'),color:'grey'}}
            /> {DATA && DATA[3].title}  </Text>
            <Text style={styles.category}>{DATA && DATA[3].description}</Text>
  
            <Image source={DATA && DATA[3].image} style={styles.image} />

            
            
        </View>
        </TouchableOpacity> : <View style={styles.main}>
           

        { no == 0 ?
           <Text 
          
           style={styles.name}><Feather
           name="check-circle"
           size={20}
           style={{marginLeft:wp('3%'),color:'grey'}}
           /> {DATA && DATA[3].title}  </Text>:<View>
               <Text 
          
          style={styles.name}><Feather
          name="check-circle"
          size={20}
          style={{marginLeft:wp('3%'),color:'green'}}
          /> {DATA && DATA[3].title}  </Text></View>}
           <Text style={styles.price}>{DATA && DATA[3].price}</Text>
 
           <Image source={DATA && DATA[3].image} style={styles.image} />

           
         
       </View>}     

 
  <BottomSheet
        snapPoints={[300, 0]}
        borderRadius={20}
    
        ref={sheetRef}

        renderContent={()=>{
          
            return(
            <View style={{
                padding: 10,
                backgroundColor: '#f8f9fd',
                paddingTop: 20,
                marginTop:hp('-2%'),
                width:wp('90%'),
                borderRadius:20
              }}>
                  
           
            
         <View>
    <Bottomsheet/>
    {no == 0 ? <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

    
<View style={styles.btn}>
<Button title="Amount to Pay    ???15/hr" onPress={()=> setNo(1)}/>
</View>
</View>
: <View></View>}
{no == 1 ? <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
<View style={styles.btn}>
<Button title="Amount to Pay    ???15/hr" onPress={()=> navigation.navigate("PaymentDone")}/>
</View>
</View>:<View></View>}
</View>
        </View>
        )
    }}
        enabledGestureInteraction={true}
        initialSnap={0}


      />
      {/* {isTrue ? <BottomSheet
        snapPoints={[300, 20]}
        borderRadius={20}
    
        ref={sheetRef2}

        renderContent={()=>{
          
            return(
            <View style={{
                backgroundColor: '#f8f9fd',
                padding: 10,
                height: hp('40%'),
                width:wp('90%'),
                marginTop: hp('20%'),
                borderRadius:10
                
              }}>
                  
           
            
         <View>
    <Bottomsheet/>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

   
<View style={styles.btn}>

<Button title="ACCEPT" onPress={()=> setisTrue(false)}/>


</View>
</View>

</View>
        </View>
        )
    }}
        enabledGestureInteraction={true}
        initialSnap={0}


      />:<View></View>} */}
      
  </View>
  </View>



  )
  }

  export default Bookingstatus ;

const styles = StyleSheet.create({
    container:{
     width:wp('100%'),
     height:hp('100%')
    },
  
      
          
    main:{
        height: hp('13%'),
        marginTop: hp('2%'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:-4,
        backgroundColor:'white',
        borderRadius:19,
    },
    
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'black',padding:10,marginLeft:wp('-1%')
    },
    Imageholder:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        width: wp('60%'),

        


    },
    
    category:{
     color:'#a8aeb2',padding:5,marginLeft:wp('4%')
    },
    price:{
        color:'blue',padding:5,marginLeft:wp('4%')
       },
    image:{
        height: hp('8'),
       width: wp('20%'),
       marginTop: hp('-8%'),
       marginLeft: wp('65%'),



         
    },
    btn:{
        width: wp('80%'),
        marginTop:hp('-2%'),
        borderRadius:10,
        borderWidth:5,
        borderColor:'#2196f3',
        



      },
      btn1:{
        width: wp('60%'),
        marginTop:hp('-2%'),
        borderRadius:10,
        borderWidth:5,
        borderColor:'#2196f3',
        



      },
   

});