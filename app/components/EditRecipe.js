import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Modal,
    TextInput,
    Picker
} from 'react-native';
import {highlightColor, highlightColorSecondary} from "../constants/globalStyles";
import globalStyles from "../constants/globalStyles";
import {bindActionCreators} from "redux";
import LoadingIndicator from '../components/LoadingIndicator';
import {connect} from "react-redux";
import {ActionCreators} from "../actions";

class CreateRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.itemId,
            visible: this.props.modalVisible,
            title: "",
            text: "",
            categoryID: null,
        };
    }

    componentDidMount() {
        this.props.getAllCategories();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalVisible !== this.props.modalVisible) {
            this.setState({visible: nextProps.modalVisible});
        }
    }

    render() {
        return (
            <View>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.visible}
                    onRequestClose={() => {
                        this.props.closeModal()
                    }}>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={globalStyles.primaryText}>Add new Recipe</Text>
                    </View>
                    <View style={{flex: 4, alignItems: "center"}}>
                        <Text style={globalStyles.primaryText}>Title:</Text>
                        <TextInput style={[globalStyles.primaryText, {width: "90%", paddingBottom: 4}]}
                                   onChangeText={(title) => this.onTitleChange(title)}
                                   value={this.state.title}/>
                        <Text style={globalStyles.primaryText}>Text:</Text>
                        <TextInput style={[globalStyles.primaryText, {width: "90%", paddingBottom: 4}]}
                                   onChangeText={(text) => this.onTextChange(text)}
                                   value={this.state.text}/>
                        <Text style={globalStyles.primaryText}>Select Category:</Text>
                        <Picker
                            mode="dropdown"
                            style={{width: "90%", paddingBottom: 4}}
                            onValueChange={this.onCategoryChange}>
                            {this.props.categories.map((item) => {
                                    return <Picker.Item
                                        label={item.title} value={item._id} key={item._id}/>
                                }
                            )}
                        </Picker>
                        <TouchableHighlight style={[globalStyles.primaryButton, {marginTop: 10}]}
                                            underlayColor={highlightColor}
                                            onPress={() => this.onPressDone()}>
                            <Text style={globalStyles.primaryButtonText}>Done</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={globalStyles.secondaryButton}
                                            underlayColor={highlightColorSecondary}
                                            onPress={() => this.props.closeModal()}>
                            <Text style={globalStyles.primaryButtonText}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                }
            </View>
        );
    }

    onTextChange(text) {
        this.setState({text: text});
    }

    onTitleChange(title) {
        this.setState({title: title});
    }

    onCategoryChange = value => {
        this.setState({categoryID: value})
    };

    onPressDone() {
        if (!(this.state.title.trim().length === 0)
            && !(this.state.text.trim().length === 0)
            && !(this.state.categoryID === null)) {
            this.props.addNew(this.state.title, this.state.text, this.state.categoryID);
            this.props.closeModal();
        } else {
            alert("Please enter a valid data");
        }
    }

}

function mapStateToProps(state) {
    return {
        loading: state.categoriesReducer.loading,
        categories: state.categoriesReducer.categories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);