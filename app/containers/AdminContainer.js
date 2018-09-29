import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import {Actions} from "react-native-router-flux";

class AdminContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => Actions.adminRecipes()}>
                    <Text style={globalStyles.primaryButtonText}>Recipes management</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => null}>
                    <Text style={globalStyles.primaryButtonText}>Articles management</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => null}>
                    <Text style={globalStyles.primaryButtonText}>Categories management</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AdminContainer;