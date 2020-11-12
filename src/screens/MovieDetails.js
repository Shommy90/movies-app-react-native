import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const MovieDetails = () => {
  return (
    <ScrollView>
      <View style={styles.backdropImgHolder}>
        <ImageBackground
          source={{
            uri:
              "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
          }}
          style={styles.backdropImg}
        ></ImageBackground>
      </View>

      <View style={styles.content}>
        <View style={styles.posterHolder}>
          <Image
            style={styles.poster}
            source={{
              uri:
                "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
            }}
          />

          <View style={styles.titleRatingHolder}>
            <Text style={styles.movieTitle}>
              title jfnds sdkf jksdk sd (rating)
            </Text>
            <Text>stars</Text>
          </View>
        </View>

        <View style={styles.infoHolder}>
          <View style={styles.infoDetails}>
            <Text style={styles.infoDetailsText}>year</Text>
            <Text style={styles.lineBetween}>|</Text>
            <Text style={styles.infoDetailsText}>length</Text>
            <Text style={styles.lineBetween}>|</Text>
            <Text style={styles.infoDetailsText}>director</Text>
          </View>
        </View>

        <View style={styles.castHolder}>
          <Text style={styles.infoTitle}>Cast:</Text>
          <Text style={styles.text}>name, name, name</Text>
        </View>

        <View style={styles.descriptionHolder}>
          <Text style={styles.infoTitle}>Movie Description:</Text>
          <Text style={styles.text}>
            lorem fksdfksjdfn ksjdfhksdjf jsdfk sdjf kdsj fksdfksjdfnsdkj jsd
            fkjsdf kjdgdfgdfghjk sdj ksdjsdfg dfg jhg jsdk
            sdhgjkhjgkdfhjkgdfhkghjkdfhgjkdfhjkgh sj ghjkdfg df lorem
            fksdfksjdfn ksjdfhksdjf jsdfk sdjf kdsj fksdfksjdfnsdkj jsd fkjsdf
            kjdgdfgdfghjk sdj ksdjsdfg dfg jhg jsdk
            sdhgjkhjgkdfhjkgdfhkghjkdfhgjkdfhjkgh sj ghjkdfg df
          </Text>
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
    padding: 30,
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
    fontSize: 25,
  },
  infoDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineBetween: {
    marginHorizontal: 10,
    paddingVertical: 15,
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
  },
  text: {
    fontSize: 18,
  },
});

export default MovieDetails;
