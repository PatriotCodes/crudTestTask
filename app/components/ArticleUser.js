import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import {Actions} from "react-native-router-flux";

class ArticleUser extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight style={styles.recipeTextViewStyle} underlayColor={highlightColor}
                                    onPress={() => Actions.singleArticle({title: this.props.title,
                                        text: this.props.text, description: this.props.description})}>
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
    container: {
        flex: 1,
    },
});

export default ArticleUser;