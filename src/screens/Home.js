import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>wookie</Text>
        <Text style={styles.title}>movies</Text>
      </View>

      <Text
        onPress={() => navigation.navigate("Movie Details")}
        style={styles.title}
      >
        DETAILS
      </Text>

      <View style={styles.movieListHolder}>
        <Text>genre</Text>
      </View>

      <View style={styles.movieListHolder}>
        <Text>genre</Text>
      </View>

      <View style={styles.movieListHolder}>
        <Text>genre</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHolder: {
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  movieListHolder: {
    paddingLeft: 30,
    paddingVertical: 10,
  },
});
