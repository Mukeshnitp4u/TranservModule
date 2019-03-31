
import React from "react";
import { View, Text } from "react-native";
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
    MovieList: {
    screen: MovieList
  } ,
  MovieDetail:{
      screen:MovieDetail
  }
},
{
    initialRouteName:"MovieList"
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer 
