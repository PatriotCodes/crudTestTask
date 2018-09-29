import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';
import RecipeUser from '../components/RecipeUser';
import ArticleUser from "../components/ArticleUser";

class CategoryContainer extends Component {

    componentDidMount() {
        this.props.getRecipesByCat(this.props.catId);
        this.props.getArticlesByCat(this.props.catId);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <View style={styles.container}>
                    <FlatList
                        data={this.props.recipes}
                        renderItem={({item}) => (
                            <RecipeUser title={item.title} id={item._id} text={item.text}/>
                        )}
                        keyExtractor={item => item._id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                </View>}
                {!this.props.loading2 &&
                <View style={styles.container}>
                    <FlatList
                        data={this.props.articles}
                        renderItem={({item}) => (
                            <ArticleUser title={item.title} id={item._id} text={item.text}
                                description={item.description}/>
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
        loading2: state.articlesReducer.loading,
        articles: state.articlesReducer.articles,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);