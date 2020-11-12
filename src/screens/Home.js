import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MovieItemHome from "../components/MovieItemHome";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const bearer = "Bearer Wookie2019";
      const url = `https://wookie.codesubmit.io/movies`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: bearer,
        },
      });
      const result = await response.json();
      setMovies(result.movies);
      setLoading(false);

      console.log("results HOME:", result.movies);
    } catch (error) {
      console.log("error - ", error);
    }
  };

  const renderAction = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Action") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  const renderAnimation = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Animation") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  const renderAdventure = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Adventure") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  const renderCrime = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Crime") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  const renderDrama = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Drama") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  const renderFamily = ({ item }) => {
    return item.genres.map((genre) => {
      if (genre === "Family") {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Movie Details", item)}
          >
            <MovieItemHome item={item} />
          </TouchableOpacity>
        );
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>wookie</Text>
        <Text style={styles.title}>movies</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Action</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderAction}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Animation</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderAnimation}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Adventure</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderAdventure}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Crime</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderCrime}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Drama</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderDrama}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.movieListHolder}>
            <Text style={styles.genreTitle}>Family</Text>

            <FlatList
              horizontal={true}
              data={movies}
              renderItem={renderFamily}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
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
  genreTitle: {
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 7,
  },
});
