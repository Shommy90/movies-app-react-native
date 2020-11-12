import React from "react";
import { View, Image, Title, StyleSheet, Text } from "react-native";

const MovieItemSearch = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={{
            uri: item.poster,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.titleHolder}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    borderWidth: 1,
    borderColor: "lightgrey",
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
