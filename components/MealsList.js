import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealsList = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
    const renderMealItem = (itemData) => {
        const isCurrentMealFav = favouriteMeals.some(meal => meal.id===itemData.item.id);
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { 
                        mealId: itemData.item.id, 
                        mealTitle: itemData.item.title, 
                        isFav:isCurrentMealFav 
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} renderItem={renderMealItem} style={{ width: '100%' }} />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealsList