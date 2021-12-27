import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const CategoryGridTile = (props) => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 3,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
})

export default CategoryGridTile