import React, { useCallback, useEffect } from 'react';
import { View, Text,Image, StyleSheet, ScrollView } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/actions/meal';
import HeaderButton from '../components/HeaderButton';


const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId')
  const currentMealIsFavourite = useSelector(state => state.meals.favouriteMeals.some(meal => meal.id===mealId))
  const mealDetails = availableMeals.find(meal => meal.id===mealId)

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId))
  },[dispatch,mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavouriteHandler})
  },[toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavourite})
  },[currentMealIsFavourite])

  const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <Image source={{uri:mealDetails.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text>{mealDetails.duration}m</Text>
        <Text>{mealDetails.complexity.toUpperCase()}</Text>
        <Text>{mealDetails.affordability.toUpperCase()}</Text>
      </View>
      <View >
        <Text style={styles.title}>Ingredients</Text>
      </View>
      {mealDetails.ingrediants.map(ingrediant => <ListItem key={ingrediant}>{ingrediant}</ListItem>)}
      <View >
        <Text style={styles.title}>Steps</Text>
      </View>
      {mealDetails.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const isFavourite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favs' iconName={isFavourite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFav} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    height: 200,
    width: '100%'
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 22
  },
  listItem:{
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10
  }
});

export default MealDetailScreen;
