import React, {Component} from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../constants/globalStyles';

class SingleRecipe extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                <Text style={globalStyles.secondaryText}>{this.props.text}</Text>
            </View>
        );
    }

}

export default SingleRecipe;