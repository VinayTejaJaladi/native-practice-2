import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return <CategoryGridTile 
    title={itemData.item.title} 
    onSelect={() => {
      props.navigation.navigate('CategoryMeals',{categoryId: itemData.item.id})
    }}
    color={itemData.item.color}
    />
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navigationData.navigation.openDrawer();
      }}/>
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

export default CategoriesScreen;
