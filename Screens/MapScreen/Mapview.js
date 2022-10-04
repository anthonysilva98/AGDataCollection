import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import React from "react";

const Mapview = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          longitude: -120.592805,
          latitude: 37.404814,
          latitudeDelta: 0.0025,
          longitudeDelta: 0.001,
        }}
        mapType="satellite"
        style={styles.map}
      />
    </View>
  );
};

export default Mapview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
