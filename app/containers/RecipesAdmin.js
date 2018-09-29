import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    FlatList
} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import CreateRecipe from "../components/CreateRecipe";
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';
import RecipeEdit from '../components/RecipeEdit';

class RecipesAdmin extends Component {

    componentDidMount() {
        this.props.getAllRecipes();
    }

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
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <View>
                    <FlatList
                        data={this.props.recipes}
                        renderItem={({item}) => (
                            <RecipeEdit title={item.title} id={item._id}/>
                        )}
                        keyExtractor={item => item._id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                    </View>}
                <TouchableHighlight style = {styles.addBtn}
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
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
    addBtn: {
        alignItems: 'center',
        backgroundColor: '#0073AA',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
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