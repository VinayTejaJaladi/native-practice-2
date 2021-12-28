import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const filteredMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = filteredMeals.filter(eachMeal => eachMeal.categoryIds.indexOf(catId) >= 0)

  if(displayedMeals.length===0){
    return(
      <View style={styles.content}>
        <Text>Based on your filters, there are no meals to show in this category...</Text>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  content: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;
