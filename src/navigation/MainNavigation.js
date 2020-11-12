import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MovieDetails from "../screens/MovieDetails";

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({ title: route.name })}
      />
      <MainStack.Screen
        name="Movie Details"
        component={MovieDetails}
        options={({ route }) => ({ title: route.name })}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
