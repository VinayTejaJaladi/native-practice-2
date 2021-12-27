import React from 'react';
import MealsList from '../components/MealsList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const dummyFavs = MEALS.filter(meal => meal.id==='m1' || meal.id==='m2')
  return (
    <MealsList listData={dummyFavs} navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favourites'
}

export default FavoritesScreen;
