import {
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    GET_ALL_CATEGORIES,
    LOADING
} from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

export function createCategory(title) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.createCategory(title).then(response => {
            dispatch(createCategorySuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createCategorySuccess(response) {
    return (dispatch) => {
        dispatch({type: CREATE_CATEGORY, response: response});
    };
}

export function deleteCategory(id) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.deleteCategory(id).then(() => {
            dispatch(deleteCategorySuccess(id));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteCategorySuccess(id) {
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

export function editCategory(id) {
    return (dispatch) => {
        dispatch({type: EDIT_CATEGORY, id: id});
    };
}