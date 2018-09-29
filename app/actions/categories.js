import {CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, LOADING} from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

export function createCategory(category) {
    return (dispatch) => {
        dispatch({type: CREATE_CATEGORY, category: category});
    };
}

export function deleteCategory(id) {
    return (dispatch) => {
        dispatch({type: DELETE_CATEGORY, id: id});
    };
}

export function getAllCategories() {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.getAllCategories().then(categories => {
            dispatch(getAllCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getAllCategoriesSuccess(categories) {
    return (dispatch) => {
        dispatch({type: GET_ALL_CATEGORIES, categories: categories});
    };
}