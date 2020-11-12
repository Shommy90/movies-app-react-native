import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainNavigation from "../navigation/MainNavigation";
import SearchNavigation from "../navigation/SearchNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Search") {
            iconName = "ios-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#999",
      }}
    >
      <Tab.Screen name="Home" component={MainNavigation} />
      <Tab.Screen name="Search" component={SearchNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
