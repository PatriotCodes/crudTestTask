import { CREATE_ARTICLE, DELETE_ARTICLE } from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

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