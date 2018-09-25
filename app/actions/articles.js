import { CREATE_ARTICLE, DELETE_ARTICLE } from "../constants/actionTypes";

export function createArticle(article) {
    return (dispatch) => {
        dispatch({type: CREATE_ARTICLE, article: article});
    };
}

export function deleteArticle(id) {
    return (dispatch) => {
        dispatch({type: DELETE_ARTICLE, id: id});
    };
}