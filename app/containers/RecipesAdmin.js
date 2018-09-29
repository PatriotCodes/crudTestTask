import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import CreateRecipe from "../components/CreateRecipe";

class RecipesAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addNewVisible: false
        };
        this.closeModal = this.closeModal.bind(this);
        //this.addNew = this.addNewProduct.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateRecipe modalVisible={this.state.addNewVisible}
                               closeModal={this.closeModal}/>
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

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default RecipesAdmin;