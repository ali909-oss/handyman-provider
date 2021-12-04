import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const Location = ({navigation}) => {
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={tokyoRegion} 
          >
            <Marker coordinate={tokyoRegion} />
          </MapView>
        </View>
      );
}
export default Location;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});