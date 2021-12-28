import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealsList from '../components/MealsList';


const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);
  if(favMeals.length===0 || !favMeals){
    return (
      <View style={styles.content}>
        <Text>There are no favourites. Add some!!</Text>
      </View>
    )
  }
  return <MealsList listData={favMeals} navigation={props.navigation} />

};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Your Favourites',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='menu' iconName='ios-menu' onPress={() => {
        navigationData.navigation.openDrawer();
      }} />
    </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;
