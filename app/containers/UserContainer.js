import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    FlatList, StyleSheet,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';
import CategoryUser from '../components/CategoryUser';

class UserContainer extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading && <View>
                    <FlatList
                        data={this.props.categories}
                        renderItem={({item}) => (
                            <CategoryUser title={item.title} id={item._id}/>
                        )}
                        keyExtractor={item => item._id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                </View>}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
});

function mapStateToProps(state) {
    return {
        categories: state.categoriesReducer.categories,
        loading: state.categoriesReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);