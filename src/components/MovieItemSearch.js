import React from "react";
import { View, Image, Title, StyleSheet, Text } from "react-native";

const MovieItemSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.titleHolder}>
        <Text style={styles.title}>Title</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "lightgrey",
  },
  imageHolder: {
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleHolder: {
    backgroundColor: "grey",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default MovieItemSearch;
