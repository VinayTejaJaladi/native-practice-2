import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage} >
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center'
    }
});

export default MealItem