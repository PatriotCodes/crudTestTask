import {CREATE_ARTICLE, DELETE_ARTICLE, GET_ALL_ARTICLES, LOADING} from "../constants/actionTypes";
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

export function getAllArticles() {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.getAllArticles().then(articles => {
            dispatch(getAllArticlesSuccess(articles));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getAllArticlesSuccess(articles) {
    return (dispatch) => {
        dispatch({type: GET_ALL_ARTICLES, articles: articles});
    };
}