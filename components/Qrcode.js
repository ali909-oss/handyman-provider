import { View,Text } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-scanner-view';
import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class DefaultScreen extends Component {

    renderTitleBar = () => <Text style={{color:'black',textAlign:'center'}}>Scan QR Code</Text>


    barcodeReceived = (event) => { console.log('Type: ' + event.type + '\nData: ' + event.data) };
    renderFooterView=()=>
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:500}}>
        <Ionicons name="flash-off" size={25} color="black"/>
        <Ionicons name="image-outline" size={25} color="black"
        style={{left:20}}
    
        />

       

    </View>
    
    render() {
        return (
           <View style={{flex:1}}>
            < QRScannerView
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={this.renderFooterView}
                torchOn={true}
                
                scanBarAnimateReverse={ true }/>
                
           </View>
        )
    }
}