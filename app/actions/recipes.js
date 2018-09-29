import { CREATE_RECIPE, DELETE_RECIPE, GET_ALL_RECIPES, EDIT_RECIPE, LOADING, RECIPES_BY_CAT } from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

export function createRecipe(title,text,categoryID) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.createRecipe(title,text,categoryID).then(response => {
            dispatch(createRecipeSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createRecipeSuccess(response) {
    return (dispatch) => {
        dispatch({type: CREATE_RECIPE, response: response});
    };
}

export function deleteRecipe(id) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.deleteRecipe(id).then(() => {
            dispatch(deleteRecipeSuccess(id));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteRecipeSuccess(id) {
    return (dispatch) => {
        dispatch({type: DELETE_RECIPE, id: id});
    };
}

export function editRecipe(id,title,text,categoryID) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.updateRecipe(id,title,text,categoryID).then(response => {
            dispatch(editRecipeSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function editRecipeSuccess(response) {
    return (dispatch) => {
        dispatch({type: EDIT_RECIPE, response: response});
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

export function getRecipesByCat(id) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.recipesByCategory(id).then(recipes => {
            dispatch(getRecipesByCatSuccess(recipes));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getRecipesByCatSuccess(recipes) {
    return (dispatch) => {
        dispatch({type: RECIPES_BY_CAT, recipes: recipes});
    };
}