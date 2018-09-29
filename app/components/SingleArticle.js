import React, {Component} from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../constants/globalStyles';

class SingleArticle extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                <Text style={globalStyles.secondaryText}>{this.props.text}</Text>
                <Text style={globalStyles.secondaryText}>{this.props.description}</Text>
            </View>
        );
    }

}

export default SingleArticle;