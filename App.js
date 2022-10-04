import { StatusBar } from "expo-status-bar";
import Mapview from "./Screens/MapScreen";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./Src/Components/SearchBar";
export default function App() {
  return (
    <View style={styles.container}>
      <Mapview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
