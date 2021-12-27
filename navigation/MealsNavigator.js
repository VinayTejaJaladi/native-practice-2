import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  }
}
);

const FavsStackNavigator = createStackNavigator({
  Favourites: FavouritesScreen,
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor : Colors.primaryColor
    },
    headerTintColor: 'white'
  }
});

const MealsFavsTabNavigator = createBottomTabNavigator({
  AllMeals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    }
  }},
  Favourites: {screen: FavsStackNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    }
  }}
},{
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
});

export default createAppContainer(MealsFavsTabNavigator);
