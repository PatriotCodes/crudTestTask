import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Modal,
    TextInput,
} from 'react-native';
import {highlightColor, highlightColorSecondary} from "../constants/globalStyles";
import globalStyles from "../constants/globalStyles";

class CreateRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.modalVisible,
            title: "",
            text: "",
            categoryID: "5b8ff807060dad0400be34b0",
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalVisible !== this.props.modalVisible) {
            this.setState({visible: nextProps.modalVisible});
        }
    }

    render() {
        return (
            <View>
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
                        <TouchableHighlight style = {globalStyles.primaryButton}
                                            underlayColor={highlightColor}
                                            onPress={() => this.onPressDone()}>
                            <Text style={globalStyles.primaryButtonText}>Done</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {globalStyles.secondaryButton}
                                            underlayColor={highlightColorSecondary}
                                            onPress={() => this.props.closeModal()}>
                            <Text style={globalStyles.primaryButtonText}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }

    onTextChange(text) {
        this.setState({text: text});
    }

    onTitleChange(title) {
        this.setState({title: title});
    }

    onPressDone() {
        if (!(this.state.title.trim().length === 0) && !(this.state.text.trim().length === 0)) {
            this.props.addNew(this.state.title, this.state.text, this.state.categoryID);
            this.props.closeModal();
        } else {
            alert("Please enter a valid data");
        }
    }

}

export default CreateRecipe;