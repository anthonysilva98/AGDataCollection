import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TextInput } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
const SearchBar = () => {
  const [textInput, setTextInput] = useState("");
  const [servres, setServres] = useState([]);

  const fetchData = async () => {
    const dataFromServer = await SubmitSearch();
    setServres(dataFromServer);
    console.log(servres);
  };

  const SubmitSearch = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };
  return (
    <View style={styles.SearchContainer}>
      <TextInput
        placeholder="Enter in a value"
        placeholderTextColor={"red"}
        value={textInput}
        onChangeText={(value) => setTextInput(value)}
      ></TextInput>

      <View>
        <Text onPress={fetchData}>Search</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
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
    borderRadius: 50,
  },
});
