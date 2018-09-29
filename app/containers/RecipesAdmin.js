import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import CreateRecipe from "../components/CreateRecipe";
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";

class RecipesAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addNewVisible: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.addNew = this.addNewRecipe.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateRecipe modalVisible={this.state.addNewVisible}
                              addNew={this.addNew} closeModal={this.closeModal}/>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => this.setState({addNewVisible: true})}>
                    <Text style={globalStyles.primaryButtonText}>Create Recipe</Text>
                </TouchableHighlight>
            </View>
        )
    }

    closeModal() {
        this.setState({addNewVisible: false})
    }

    addNewRecipe(title,text,categoryID = null) {
        this.props.createRecipe(title,text,categoryID);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function mapStateToProps(state) {
    return {
        recipes: state.recipesReducer.recipes,
        loading: state.recipesReducer.loading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesAdmin);