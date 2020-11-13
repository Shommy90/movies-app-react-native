import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const MovieDetails = (props) => {
  const movie = props.route.params;
  console.log("details props: ", movie);

  return (
    <ScrollView>
      <View style={styles.backdropImgHolder}>
        <ImageBackground
          source={{
            uri: movie.backdrop,
          }}
          style={styles.backdropImg}
        ></ImageBackground>
      </View>

      <View style={styles.content}>
        <View style={styles.posterHolder}>
          <Image
            style={styles.poster}
            source={{
              uri: movie.poster,
            }}
          />

          <View style={styles.titleRatingHolder}>
            <Text style={styles.movieTitle}>
              {movie.title} ({movie.imdb_rating})
            </Text>
          </View>
        </View>

        <View style={styles.infoHolder}>
          <View style={styles.infoDetails}>
            <Text style={styles.infoDetailsText}>
              {movie.released_on.substring(0, 4)}
            </Text>
            <Text style={styles.lineBetween}>|</Text>
            <Text style={styles.infoDetailsText}>{movie.length}</Text>
            <Text style={styles.lineBetween}>|</Text>
            <Text style={[styles.infoDetailsText, { flex: 1 }]}>
              {movie.director}
            </Text>
          </View>
        </View>

        <View style={styles.castHolder}>
          <Text style={styles.infoTitle}>Cast:</Text>
          {movie &&
            movie.cast.map((actor, i) => (
              <Text key={i} style={styles.text}>
                {actor}
              </Text>
            ))}
        </View>

        <View style={styles.descriptionHolder}>
          <Text style={styles.infoTitle}>Movie Description:</Text>
          <Text style={styles.text}>{movie.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backdropImgHolder: {
    backgroundColor: "grey",
    height: 180,
  },
  backdropImg: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 20,
    position: "relative",
    top: -100,
    marginBottom: -100,
  },
  posterHolder: {
    flexDirection: "row",
  },
  poster: {
    width: 130,
    height: 200,
    marginRight: 20,
    resizeMode: "cover",
  },
  titleRatingHolder: {
    paddingTop: 30,
    justifyContent: "space-between",
    flex: 1,
  },
  movieTitle: {
    fontSize: 26,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0, 0.7)",
    color: "#fff",
    padding: 5,
  },
  infoDetails: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  lineBetween: {
    marginHorizontal: 10,
  },
  castHolder: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  infoTitle: {
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 20,
  },
  infoDetailsText: {
    fontSize: 20,
    flexWrap: "wrap",
  },
  text: {
    fontSize: 18,
  },
});

export default MovieDetails;
