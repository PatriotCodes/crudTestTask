import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
import globalStyles, {highlightColor} from '../constants/globalStyles';

class InitialContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => Actions.admin()}>
                    <Text style={globalStyles.primaryButtonText}>Admin Panel</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {globalStyles.primaryButton}
                                    underlayColor={highlightColor}
                                    onPress={() => Actions.user()}>
                    <Text style={globalStyles.primaryButtonText}>User Panel</Text>
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

export default InitialContainer;