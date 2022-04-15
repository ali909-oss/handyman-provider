import React from "react";
import { View ,Text,Image,FlatList,StyleSheet} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';



const Data=[
    {
        id:'1',
        image: require('../assets/icons/hotel1.jpg'),


    },
    {
        id:'2',
        image: require('../assets/icons/img2.jpg'),


    },
    {
        id:'3',
        image: require('../assets/icons/img3.jpg'),


    },
    {
        id:'4',
        image: require('../assets/icons/hotel1.jpg'),


    },
    {
        id:'5',
        image: require('../assets/icons/img2.jpg'),


    },
    {
        id:'6',
        image: require('../assets/icons/img3.jpg'),


    },
    {
        id:'7',
        image: require('../assets/icons/hotel1.jpg'),


    },
    {
        id:'8',
        image: require('../assets/icons/img2.jpg'),


    },
    {
        id:'9',
        image: require('../assets/icons/img3.jpg'),


    },
    {
        id:'10',
        image: require('../assets/icons/hotel1.jpg'),


    },
    {
        id:'11',
        image: require('../assets/icons/img2.jpg'),


    },
    {
        id:'12',
        image: require('../assets/icons/img3.jpg'),


    },
]
const Photos=()=>{
    return(
        <View style={{marginTop:hp('2%')}}>
 <FlatList
                    data={Data}
                    numColumns={2}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        
                        return (
                            <View style={{flex:1}}>
                                    <View style={styles.Imageholder}>
                                    <Image source={item.image} style={styles.image1} />
                                            </View>
                                            </View>
                        )
                    }}
                    />
                    </View>
    )
}
export default Photos;
const styles=StyleSheet.create ({
    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        padding:5
    },
    image1:{
        width:wp('40%'),
        height:hp('15%')
        
    }
}
)