import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import globalStyles, {highlightColor,highlightColorSecondary} from '../constants/globalStyles';
import {deleteRecipe, editRecipe} from "../actions/recipes";
import {connect} from "react-redux";

class RecipeItem extends Component {

    render() {
        return (
            <View style={styles.editItemView}>
                <View style={styles.removeBtnWrapper}>
                    <TouchableHighlight key={this.props.id}
                                        underlayColor={highlightColorSecondary}
                                        onPress={() => this.onPressDelete(this.props.id)}
                                        style={styles.removeBtn}>
                        <Text style={[globalStyles.primaryText,{textAlign: "center",
                            color: "white",paddingTop: 14,
                            paddingBottom: 14,}]}>DELETE</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.recipeTextViewStyle}>
                    <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                </View>
                <View style={styles.removeBtnWrapper}>
                    <TouchableHighlight key={this.props.id}
                                        underlayColor={highlightColor}
                                        onPress={() => this.onPressEdit(this.props.id)}
                                        style={styles.editBtn}>
                        <Text style={[globalStyles.primaryText,{textAlign: "center",
                            color: "white",paddingTop: 14,
                            paddingBottom: 14,}]}>EDIT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    onPressDelete = (id) => {
        this.props.deleteRecipe(id);
    };

    onPressEdit = (id) => {
        //this.props.editRecipe(id);
    }

}

const styles = StyleSheet.create({
    recipeTextViewStyle: {
        flex: .5,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 7,
        paddingRight: 7,
    },
    removeBtnWrapper: {
        flex: .25,
        alignItems: "center",
        justifyContent: "center",
    },
    editItemView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
    },
    removeBtn: {
        flex:1,
        backgroundColor:"#DC3232",
        width: "100%",
        height: "100%",
    },
    editBtn: {
        flex:1,
        backgroundColor:"#0073AA",
        width: "100%",
        height: "100%",
    },
});

export default connect(null, {deleteRecipe, editRecipe})(RecipeItem);