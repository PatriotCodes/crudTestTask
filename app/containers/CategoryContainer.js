import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight, FlatList} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';

class CategoryContainer extends Component {

    componentDidMount() {
        this.props.getRecipesByCat(this.props.catId);
    }

    render() {
        return (
            <View>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <View style={styles.container}>
                    <FlatList
                        data={this.props.recipes}
                        renderItem={({item}) => (
                            <Text>{item.title}</Text>
                        )}
                        keyExtractor={item => item._id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                </View>}
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

function mapStateToProps(state) {
    return {
        recipes: state.recipesReducer.recipes,
        loading: state.recipesReducer.loading,
        // loading2: state.articlesReducer.loading,
        // articles: state.articlesReducer.articles,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);