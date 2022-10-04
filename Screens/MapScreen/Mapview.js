import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MapView from "react-native-maps";
import React from "react";
import SearchBar from "../../Src/Components/SearchBar/SearchBar";
const Mapview = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.warn("Keyboard Dismissed");
        Keyboard.dismiss();
        //Dismisses keyboard by tapping on Screen instead of return
      }}
    >
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
        <SearchBar />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Mapview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
