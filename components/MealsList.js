import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = props => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { mealId: itemData.item.id })
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