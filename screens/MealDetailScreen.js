import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealDetails = MEALS.find(meal => meal.id===mealId)
  return (
    <View style={styles.screen}>
      <Text>{mealDetails.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealDetails = MEALS.find(meal => meal.id===mealId)
  return {
    headerTitle: mealDetails.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favs' iconName='ios-star' onPress={() => {}} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;