import { CREATE_RECIPE, DELETE_RECIPE } from "../constants/actionTypes";

export function createRecipe(recipe) {
    return (dispatch) => {
        dispatch({type: CREATE_RECIPE, recipe: recipe});
    };
}

export function deleteRecipe(id) {
    return (dispatch) => {
        dispatch({type: DELETE_RECIPE, id: id});
    };
}