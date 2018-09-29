import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    FlatList
} from 'react-native';
import globalStyles, {highlightColor} from '../constants/globalStyles';
import CreateArticle from "../components/CreateArticle";
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import LoadingIndicator from '../components/LoadingIndicator';
import ArticleItem from '../components/ArticleItem';

class ArticlesAdmin extends Component {

    componentDidMount() {
        this.props.getAllArticles();
    }

    constructor(props) {
        super(props);
        this.state = {
            addNewVisible: false,
        };
        this.closeModal = this.closeModal.bind(this);
        this.addNew = this.addNewRecipe.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <View style={styles.container}>
                    <CreateArticle modalVisible={this.state.addNewVisible}
                                  addNew={this.addNew} closeModal={this.closeModal}/>
                    <FlatList
                        data={this.props.articles}
                        renderItem={({item}) => (
                            <ArticleItem title={item.title} id={item._id}/>
                        )}
                        keyExtractor={item => item._id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                    <TouchableHighlight style = {styles.addBtn}
                                        underlayColor={highlightColor}
                                        onPress={() => this.setState({addNewVisible: true})}>
                        <Text style={globalStyles.primaryButtonText}>Create Article</Text>
                    </TouchableHighlight>
                    </View>}
            </View>
        )
    }

    closeModal() {
        this.setState({addNewVisible: false})
    }

    addNewRecipe(title,text,categoryID = null,description) {
        this.props.createArticle(title,text,categoryID,description);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
    addBtn: {
        alignItems: 'center',
        backgroundColor: '#0073AA',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }
});

function mapStateToProps(state) {
    return {
        articles: state.articlesReducer.articles,
        loading: state.articlesReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesAdmin);