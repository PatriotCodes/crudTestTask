import { CREATE_CATEGORY, DELETE_CATEGORY } from "../constants/actionTypes";

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