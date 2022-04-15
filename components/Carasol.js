import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';


const Data = [
    {
        image: require('../assets/icons/img3.jpg'),


    },
    {
        image: require('../assets/icons/img1.jpg'),


    },
    {
        image: require('../assets/icons/img2.jpg'),


    }
]

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image source={item.image} style={styles.image} />

        </View>
    )}

const Carasol = () => {
        const [index, setIndex] = React.useState(0)
        const isCarousel = React.useRef(null)


        return (
            <View>
                <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={Data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />


            </View>
        )
    }
    export default Carasol;
    const styles = StyleSheet.create({
        image: {
            width: ITEM_WIDTH,
            height:hp('30%'),
          },
    })