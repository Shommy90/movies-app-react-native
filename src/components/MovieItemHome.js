import React from "react";
import { StyleSheet, View, Image } from "react-native";

const MovieItemHome = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.poster }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 150,
    backgroundColor: "grey",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default MovieItemHome;
