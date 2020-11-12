import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import MovieItemSearch from "../components/MovieItemSearch";

const Search = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Search The Movie</Text>

      <View style={styles.textInputHolder}>
        <TextInput style={styles.textInput} />

        <TouchableOpacity style={styles.buttonSearch}>
          <Text style={styles.buttonSearchText}>Search</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Movie Details")}>
        <MovieItemSearch />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 5,
  },
  textInputHolder: {
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    backgroundColor: "white",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonSearch: {
    backgroundColor: "#f5c518",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonSearchText: {
    fontSize: 24,
  },
});

export default Search;
