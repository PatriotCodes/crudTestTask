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
import LoadingIndicator from '../components/LoadingIndicator';

class CreateCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.modalVisible,
            title: "",
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
                        <Text style={globalStyles.primaryText}>Add new Category</Text>
                    </View>
                    <View style={{flex: 4, alignItems: "center"}}>
                        <Text style={globalStyles.primaryText}>Title:</Text>
                        <TextInput style={[globalStyles.primaryText, {width: "90%", paddingBottom: 4}]}
                                   onChangeText={(title) => this.onTitleChange(title)}
                                   value={this.state.title}/>
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

    onTitleChange(title) {
        this.setState({title: title});
    }

    onPressDone() {
        if (!(this.state.title.trim().length === 0)) {
            this.props.addNew(this.state.title);
            this.props.closeModal();
        } else {
            alert("Please enter a valid data");
        }
    }

}

export default CreateCategory;