import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import React from "react";
const SearchBar = () => {
  const [textInput, setTextInput] = useState("");
  const SubmitSearch = () => {
    console.warn("Submit");
  };
  return (
    <View style={styles.SearchContainer}>
      <TextInput
        style={styles.text}
        placeholder="Enter in a value"
        placeholderTextColor={"red"}
        value={textInput}
        onChangeText={(value) => setTextInput(value)}
      ></TextInput>

      <View>
        <Text onPress={SubmitSearch}>Search</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  text: {
    fontSize: "30",
  },
  SearchContainer: {
    position: "absolute",
    flexDirection: "row",
    top: Dimensions.get("window").height * 0.1,
    left: Dimensions.get("window").width * 0.1,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    width: "80%",
    height: "7%",
    borderWidth: 1,
    borderColor: "##5f696d ",
    backgroundColor: "#Cdd9de",
    opacity: 0.5,
    borderRadius: "40%",
  },
});
