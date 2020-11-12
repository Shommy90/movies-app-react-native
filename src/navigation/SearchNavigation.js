import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Search";
import MovieDetails from "../screens/MovieDetails";

const SearchStack = createStackNavigator();

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={({ route }) => ({ title: route.name })}
      />
      <SearchStack.Screen
        name="Movie Details"
        component={MovieDetails}
        options={({ route }) => ({ title: route.name })}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
