import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { setFilters } from '../store/actions/meal';
import Colors from '../constants/Colors';

const FilterContainer = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch trackColor={{ true: Colors.primaryColor, false: '#ccc' }} thumbColor={Colors.primaryColor} value={props.value} onValueChange={props.onChange} />
    </View>
  )
}

const FiltersScreen = props => {
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const FiltersList = useCallback(() => {
    const filters = {
      gluttenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }

    dispatch(setFilters(filters))
  }, [isVegetarian,isGluttenFree,isLactoseFree,isVegan, dispatch]);

  useEffect(() => {
    props.navigation.setParams({save: FiltersList})
  }, [FiltersList]);
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterContainer value={isGluttenFree} label='Glutten-Free' onChange={newValue => setIsGluttenFree(newValue)} />
      <FilterContainer value={isLactoseFree} label='Lactose-Free' onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterContainer value={isVegan} label='Vegan' onChange={newValue => setIsVegan(newValue)} />
      <FilterContainer value={isVegetarian} label='Vegetarian' onChange={newValue => setIsVegetarian(newValue)} />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navigationData.navigation.openDrawer();
        }} />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save' onPress={navigationData.navigation.getParam('save')} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25
  },
  filterContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10
  }
});

export default FiltersScreen;
