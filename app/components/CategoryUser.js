import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import {Actions} from "react-native-router-flux";

class CategoryUser extends Component {

    render() {
        return (
            <View style={styles.editItemView}>
                <TouchableHighlight style={styles.recipeTextViewStyle} underlayColor={highlightColor}
                                    onPress={() => Actions.category({catId: this.props.id})}>
                    <Text style={[globalStyles.primaryText,{color: '#FFFFFF'}]}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    recipeTextViewStyle: {
        flex: 1,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: '#0073AA',
    },
    editItemView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
    },
});

export default CategoryUser;