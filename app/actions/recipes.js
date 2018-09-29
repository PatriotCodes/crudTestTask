import { CREATE_RECIPE, DELETE_RECIPE, GET_ALL_RECIPES, LOADING } from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

export function createRecipe(title,text,categoryID) {
    return (dispatch) => {
        return testServerApi.createRecipe(title,text,categoryID).then(response => {
            dispatch(createRecipeSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createRecipeSuccess(recipe) {
    return (dispatch) => {
        dispatch({type: CREATE_RECIPE, recipe: recipe});
    };
}

export function deleteRecipe(id) {
    return (dispatch) => {
        dispatch({type: DELETE_RECIPE, id: id});
    };
}

export function getAllRecipes() {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.getAllRecipes().then(recipes => {
            dispatch(getAllRecipesSuccess(recipes));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getAllRecipesSuccess(recipes) {
    return (dispatch) => {
        dispatch({type: GET_ALL_RECIPES, recipes: recipes});
    };
}