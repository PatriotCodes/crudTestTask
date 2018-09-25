import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {highlightColor} from '../constants/globalStyles';

class InitialContainer extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight underlayColor={highlightColor}
                                    onPress={() => Actions.admin()}>
                    <Text>Admin Panel</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={highlightColor}
                                    onPress={() => Actions.user()}>
                    <Text>User Panel</Text>
                </TouchableHighlight>
            </View>
        )
    }

}