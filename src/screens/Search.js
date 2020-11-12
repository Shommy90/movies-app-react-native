import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import MovieItemSearch from "../components/MovieItemSearch";

const Search = ({ navigation }) => {
  const [textInput, setTextInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const bearer = "Bearer Wookie2019";
      const url = `https://wookie.codesubmit.io/movies?q=${textInput}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: bearer,
        },
      });
      const result = await response.json();
      setMovies(result.movies);
      setLoading(false);

      console.log("results:", result.movies);
    } catch (error) {
      console.log("error - ", error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 10 }}
        onPress={() => navigation.navigate("Movie Details", item)}
      >
        <MovieItemSearch item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Search The Movie</Text>

      <View style={styles.textInputHolder}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
        />

        <TouchableOpacity style={styles.buttonSearch} onPress={fetchMovie}>
          <Text style={styles.buttonSearchText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      )}
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
