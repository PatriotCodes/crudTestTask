import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';

class UserContainer extends Component {

    componentDidMount() {
        this.props.getAllRecipes();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading && <View>
                {this.props.recipes.map(recipe =>
                    <Text key={recipe.id}>
                        {recipe.title}
                    </Text>
                )}</View>}
            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        recipes: state.recipesReducer.recipes,
        loading: state.recipesReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);