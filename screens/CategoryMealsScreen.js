import React from 'react';
import MealsList from '../components/MealsList';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(eachMeal => eachMeal.categoryIds.indexOf(catId) >= 0)

  return (
    <MealsList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCat.title
  }
}

export default CategoryMealsScreen;
