import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AdminContainer from './AdminContainer';
import UserContainer from './UserContainer';
import InitialContainer from './InitialContainer';
import RecipesAdmin from './RecipesAdmin';
import { StyleSheet, View } from 'react-native';
import CategoriesAdmin from "./CategoriesAdmin";
import CategoryContainer from "./CategoryContainer";
import SingleRecipe from "../components/SingleRecipe";
import SingleArticle from "../components/SingleArticle";

class AppContainer extends Component {

    render() {
        return (
            <Router titleStyle={styles.navText}>
                <Scene key="root" titleStyle={styles.headerText}>
                    <Scene key="initial" component={InitialContainer}
                           title="CRUD application"
                           initial/>
                    <Scene key="admin" component={AdminContainer}
                           renderRightButton={<View/>}
                           title="Admin Panel"/>
                    <Scene key="adminRecipes" component={RecipesAdmin}
                           renderRightButton={<View/>}
                           title="Recipes Management"/>
                    <Scene key="adminCategories" component={CategoriesAdmin}
                           renderRightButton={<View/>}
                           title="Categories Management"/>
                    <Scene key="user" component={UserContainer}
                           renderRightButton={<View/>}
                           title="User Panel"/>
                    <Scene key="category" component={CategoryContainer}
                           renderRightButton={<View/>}
                           title="Category Recipes and Articles"/>
                    <Scene key="singleRecipe" component={SingleRecipe}
                           renderRightButton={<View/>}
                           title="Recipe Info"/>
                    <Scene key="singleArticle" component={SingleArticle}
                           renderRightButton={<View/>}
                           title="Article Info"/>
                </Scene>
            </Router>
        )
    }

}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'center',
        flex: 1
    },
    navText: {
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
    },
});

export default AppContainer;